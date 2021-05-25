import { Pregunta } from './../models/pregunta';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  tituloCuestionario = '';
  descripcionCuestionario = '';

  private pregunta$ = new Subject<Pregunta>();

  constructor(private firestore: AngularFirestore) { }

  agregarPregunta(pregunta: Pregunta): void{
    this.pregunta$.next(pregunta);
  }

  getPreguntas(): Observable<Pregunta>{
    return this.pregunta$.asObservable();
  }

  crearCuestionario(cuestionario: Cuestionario): Promise<any>{
    console.log("ingresando al crear service")
    return this.firestore.collection('trivia').add(cuestionario);
  }
}
