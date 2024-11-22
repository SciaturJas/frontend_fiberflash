import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyComponent } from './verify/verify.component';
import { PasswordComponent } from './password/password.component';
import { AuthenticationModule } from '../shared/auth/authentication.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    VerifyComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthenticationModule
  ]
})
export class AuthModule { }
