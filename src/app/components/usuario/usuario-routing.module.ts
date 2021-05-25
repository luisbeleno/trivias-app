import { VerifyComponent } from './verify/verify.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
