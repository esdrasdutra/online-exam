import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: [],
})
export class LoginButtonComponent implements OnInit, OnChanges {

  @Input() buttonText = "Login"

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
