import { ErrorfirebaseService } from './../../../services/errorfirebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private afAuth: AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              private errorServices: ErrorfirebaseService) {
    this.registerForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repitPassword: ['']
    }, { validator: this.checkPassword });
  }

  ngOnInit(): void {
  }

  register() {
    const user = this.registerForm.get('usuario')?.value;
    const pass = this.registerForm.get('password')?.value;
    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(user, pass).then(rta => {
      rta.user?.sendEmailVerification();
      this.toastr.success('Enviamos un correo electrónico para verificar tu cuenta', 'Usuario Registrado');
      this.router.navigate(['/usuario']);

    }).catch(err => {
      this.loading = false;
      this.registerForm.reset();
      const titleError = 'Error';
      this.toastr.error(this.errorServices.errorMsg(err.code), titleError);
    });
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value;
    const confirmPass = group.controls.repitPassword?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
