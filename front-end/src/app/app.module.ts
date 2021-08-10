import { ExamsApiService } from './services/exam-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamsComponent } from './components/exams/exams.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';

import { environment as env } from 'src/environments/environment';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { AboutComponent } from './components/about/about.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { StartButtonComponent } from './components/start-button/start-button.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamsComponent,
    ExamFormComponent,
    ProfileComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    AboutComponent,
    DeleteButtonComponent,
    StartButtonComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    NoopAnimationsModule,
    AuthModule.forRoot({
      ...env.auth
    }),
  ],
  providers: [ExamsApiService,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
