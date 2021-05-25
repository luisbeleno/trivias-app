import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorfirebaseService } from 'src/app/services/errorfirebase.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private afAuth: AngularFireAuth,
              private toastr: ToastrService,
              private errorService: ErrorfirebaseService,
              private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    const usuario = this.loginForm.get('usuario')?.value;
    const password = this.loginForm.get('password')?.value;
    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(usuario, password).then(resp => {
      // console.log(resp);
      this.loading = false;
      if (resp.user?.emailVerified === false) {
        this.router.navigate(['/usuario/verify']);
      } else {
        this.setLocalStorage(resp.user);
        this.router.navigate(['/dashboard']);
      }
    }).catch(error => {
      this.loading = false;
      this.toastr.error(this.errorService.errorMsg(error.code), 'Error');
      this.loginForm.reset();
    });
  }

  // tslint:disable-next-line:typedef
  setLocalStorage(user: any) {
    const usuario: User = {
      uid: user.uid,
      email: user.email
    };

    localStorage.setItem('user', JSON.stringify(usuario));
  }

}
