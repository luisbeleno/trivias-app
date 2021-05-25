import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { RecoveryComponent } from './recovery/recovery.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, VerifyComponent, RecoveryComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
