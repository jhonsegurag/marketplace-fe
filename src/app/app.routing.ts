import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';
import { TimelinePageComponent } from './pages/timeline/timeline-page.component';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { PeoplePageComponent } from './pages/people/people-page.component';
import { ChatPageComponent } from './pages/chat/chat-page.component';
import { JobsPageComponent } from './pages/jobs/jobs-page.component';

import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProfileUpdatePageComponent } from './pages/profile-update/profile-update-page.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowedComponent } from './components/followed/followed.component';

import {UserGuard} from './services/user.guard';

const appRoutes: Routes = [
    {path: 'timeline', component: TimelinePageComponent, canActivate:[UserGuard]},
    {path: 'profile', component: ProfilePageComponent, canActivate:[UserGuard]},
    {path: 'profile/:id', component: ProfilePageComponent, canActivate:[UserGuard]},
    {path: 'profile-update', component: ProfileUpdatePageComponent, canActivate:[UserGuard]},
    {path: 'people', component: PeoplePageComponent, canActivate:[UserGuard]},
    {path: 'chat', component: ChatPageComponent, canActivate:[UserGuard]},
    {path: 'jobs', component: JobsPageComponent, canActivate:[UserGuard]},


    {path: 'mis-datos', component: UserEditComponent, canActivate:[UserGuard]},
    {path: 'gente', component: UsersComponent, canActivate:[UserGuard]},
    {path: 'gente/:page', component: UsersComponent, canActivate:[UserGuard]},
    {path: 'siguiendo/:id/:page', component: FollowingComponent, canActivate:[UserGuard]},
    {path: 'seguidores/:id/:page', component: FollowedComponent, canActivate:[UserGuard]},

    {path: 'home', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: '', component: HomePageComponent},
];

export const appRoutingProviders: any[] = [];
export const appRoutingModule = RouterModule.forRoot(appRoutes);
