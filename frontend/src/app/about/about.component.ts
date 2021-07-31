import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <header>
      <h2>About</h2>
      <p>
        Etiam enim purus, vehicula nec dapibus quis, egestas eu quam. Nullam
        eleifend auctor leo, vitae rhoncus mi sodales vel. Aenean fermentum
        laoreet volutpat. Integer quam orci, molestie non nibh suscipit,
        faucibus euismod sapien.
      </p>
      <header>
        <button mat-fab color="primary" class="back-button" routerLink="/">
          <i class="material-icons">chevron_left</i>
        </button>
      </header>
    </header>
  `,
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
