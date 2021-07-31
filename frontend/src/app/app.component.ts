import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z10">
      <button mat-button routerLink="/">Online Exams</button>
      <button mat-button routerLink="/about">About</button>
      <span class="fill-remaining-space"></span>
    </mat-toolbar>

    <div class="view-container">
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
