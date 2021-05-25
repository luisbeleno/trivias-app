import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorfirebaseService } from 'src/app/services/errorfirebase.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  recoveryForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private errorServices: ErrorfirebaseService) {
    this.recoveryForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  recoveryPassowrd() {
    const correo = this.recoveryForm.get('usuario')?.value;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(correo).then(() => {
      this.loading = false;
      this.toastr.info('Hemos enviado un correo para reestablecer tu contraseña', 'Restabler Contraseña');
      this.router.navigate(['/usuario']);
    }).catch(error => {
      this.loading = false;
      this.toastr.error(this.errorServices.errorMsg(error.code), 'Error');
      this.recoveryForm.reset();
    });
  }

}
