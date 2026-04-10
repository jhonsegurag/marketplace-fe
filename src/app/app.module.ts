// Modules
import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule, appRoutingProviders } from './app.routing';

// Module Custom
import { MessagesModule} from './messages/messages.module';

// Pages
import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';
import { TimelinePageComponent } from './pages/timeline/timeline-page.component';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { ProfileUpdatePageComponent } from './pages/profile-update/profile-update-page.component';
import { PeoplePageComponent } from './pages/people/people-page.component';
import { ChatPageComponent } from './pages/chat/chat-page.component';
import { JobsPageComponent } from './pages/jobs/jobs-page.component';


// Components
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeaderTimelineComponent } from './components/header-timeline/header-timeline.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { HeaderPeopleComponent } from './components/header-people/header-people.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StepperProfileComponent } from './components/stepper-profile/stepper-profile.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PostsTimelineComponent } from './components/posts-timeline/posts-timeline.component';
import { PostsPublishComponent } from './components/posts-publish/posts-publish.component';
import { PostsProfileComponent } from './components/posts-profile/posts-profile.component';
import { PostsPeopleComponent } from './components/posts-people/posts-people.component';
import { PostsJobsComponent } from './components/posts-jobs/posts-jobs.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowedComponent } from './components/followed/followed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { NavbarPublicComponent } from './components/navbar-public/navbar-public.component';
// Services
import {UserService} from './services/user.service';
import {UserGuard} from './services/user.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TimelinePageComponent,
    ProfilePageComponent,
    PeoplePageComponent,
    ChatPageComponent,
    JobsPageComponent,
    PostsJobsComponent,

    AboutUsComponent,
    FeaturesComponent,
    FooterComponent,
    FollowingComponent,
    FollowedComponent,
    HeaderTimelineComponent,
    HeaderProfileComponent,
    HeaderPeopleComponent,
    JumbotronComponent,
    LoginComponent,
    NavbarPublicComponent,
    NavbarComponent,
    NavbarLeftComponent,
    PostsProfileComponent,
    PostsPublishComponent,
    PostsTimelineComponent,
    PostsPeopleComponent,
    PublicationsComponent,
    ProfileUpdatePageComponent,
    RegisterComponent,
    SearcherComponent,
    SidebarComponent,
    StepperProfileComponent,
    TestimonialsComponent,
    TimelineComponent,
    UserEditComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    HttpClientModule,
    MessagesModule
  ],
  providers: [
      appRoutingProviders,
      UserService,
      UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
