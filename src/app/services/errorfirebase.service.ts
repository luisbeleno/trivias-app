import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorfirebaseService {

  constructor() { }

  errorMsg(code: string): string {
    let msgError = '';
    switch (code) {
      case 'auth/email-already-in-use':
        msgError = 'La dirección de Correo ya esta registrada';
        break;
      case 'auth/invalid-email':
        msgError = 'la dirección de correo es invalida';
        break;
      case 'auth/weak-password':
        msgError = 'Contraña es debil';
        break;
      case 'auth/user-not-found':
        msgError = 'Usuario o Contraseña no Valido';
        break;
      case 'auth/wrong-password':
        msgError = 'Usuario o Contraseña no Valido';
        break;
      default:
        msgError = 'Error desconocido';
        break;
    }
    return msgError;
  }
}
