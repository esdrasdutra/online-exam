import { ProfileComponent } from './components/profile/profile.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsComponent } from './components/exams/exams.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"exams",
    component:ExamsComponent
  },
  {
    path:"new-exam",
    component:ExamFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"about",
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
