import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import * as Auth0 from 'auth0-web';
import {CallbackComponent} from './callback.component';

import {ExamFormComponent} from './exams/exam-form.component';
import {RouterModule, Routes} from '@angular/router';
import {ExamsComponent} from './exams/exams.component';

import {AppComponent} from './app.component';
import {ExamsApiService} from './exams/exams-api.service';

const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'new-exam', component: ExamFormComponent },
  { path: '', component: ExamsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExamsComponent,
    ExamFormComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'deved.us.auth0.com',
      audience: 'https://online-exam.digituz.com.br',
      clientID: 'LFP0KszEZIaCMa7MTkxaSO12IgGpJQev',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile manage:exams'
    });
  }
}
