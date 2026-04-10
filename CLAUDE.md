# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run local       # Dev server — ng serve (connects to localhost:3000 API)
npm run build       # Production build — ng build --configuration production
npm start           # Serve production build via Express on port 8080
npm test            # Run unit tests — ng test (Karma/Jasmine)
npm run lint        # Lint — ng lint
```

## Architecture

Angular 18 SPA with Bootstrap 5 + Bootstrap Icons. No SCSS — all styles are plain CSS with nested syntax.

### Page → Component composition

Every authenticated page follows the same assembly pattern:
```
<navbar-left>          ← icon-only vertical nav (col-md-1)
<header-{context}>     ← profile card (header-timeline | header-profile | header-people)
<posts-publish>        ← shared composer, used on timeline and profile
<posts-{context}>      ← post list (posts-timeline | posts-profile | posts-people)
```
Pages live in `src/app/pages/`, components in `src/app/components/`.

### Routes

All routes under `UserGuard` require `identity.role == 'ROLE_USER' || 'ROLE_ADMIN'` in localStorage, otherwise redirect to `/login`.

| Route | Component |
|---|---|
| `/timeline` | TimelinePageComponent |
| `/profile`, `/profile/:id` | ProfilePageComponent (same component, different user) |
| `/profile-update` | ProfileUpdatePageComponent |
| `/people` | PeoplePageComponent |
| `/chat` | ChatPageComponent |
| `/home`, `/login`, `/register` | public, no guard |

### Services

- **`UserService`** — auth (`login`, `register`), user CRUD, `getIdentity()` / `getToken()` / `getStats()` from localStorage, `getCounter(userId?)` for follower/following/post counts
- **`PublicationService`** — `getPublication(token, page)` for timeline feed (followed users), `getPublicationUser(token, userId, page)` for a user's own posts
- **`FollowService`** — `addFollow` / `deleteFollow`
- **`UploadService`** — file uploads via raw XHR FormData (not HttpClient). Call `makeFileRequest(url, [], files, token, fieldName)`
- **`GLOBAL`** — re-exports `environment.apiUrl` and `environment.nameSocialNetwork`; import as `import {GLOBAL} from '../../services/global'`

### Auth pattern

Every component that needs auth calls these in the constructor:
```ts
this.identity = this._userService.getIdentity(); // from localStorage
this.token    = this._userService.getToken();
this.url      = GLOBAL.url;
```

API calls send the token raw as `Authorization` header (not `Bearer <token>`):
```ts
new HttpHeaders().set('Authorization', token)
```

### Design token system

Global tokens are defined in `src/custom/styles.css` (loaded globally via `angular.json`). Always use these — never hardcode hex values in component CSS:

```css
--brand: #593EFF
--brand-muted: rgba(89, 62, 255, 0.10)
--surface-base: #F4F3FD   /* page background */
--surface-card: #FFFFFF
--border-subtle: rgba(89, 62, 255, 0.12)
--ink-primary: #0F0A24
--ink-secondary: #6B6886
--ink-muted: #A8A5BD
```

Card/panel pattern: `border: 1px solid var(--border-subtle)` + `border-radius: 12px` — no `box-shadow`.

### Messages sub-module

`src/app/messages/` is a self-contained feature module (`MessagesModule`) with its own routing. Components: `MainComponent`, `ReceivedComponent`, `SendedComponent`, `ConversationComponent`, `AddComponent`, `UsersComponent`. Imported into `AppModule` but routes are defined in `messages.routing`.

### Environments

- Dev: `src/environments/environment.ts` → API at `http://localhost:3000/api/`
- Prod: `src/environments/environment.prod.ts` → API at `https://social-backend-d6f6.onrender.com/api/`

`ng build --configuration production` swaps the environment file automatically.
