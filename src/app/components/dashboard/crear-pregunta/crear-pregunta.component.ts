import { Pregunta } from './../../../models/pregunta';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent implements OnInit {
  agregarPregunta: FormGroup;
  mostrarError = false;

  // tslint:disable-next-line:variable-name
  constructor(private _quizzService: QuizzService, private fb: FormBuilder) {
    this.agregarPregunta = this.fb.group({
      titulo: ['', Validators.required],
      segundos: [10, Validators.required],
      puntos: [100, Validators.required],
      respuesta1: this.fb.group({
        titulo: ['', Validators.required],
        esCorrecta: [false, Validators.required]
      }),
      respuesta2: this.fb.group({
        titulo: ['', Validators.required],
        esCorrecta: [false, Validators.required]
      }),
      respuesta3: this.fb.group({
        titulo: '',
        esCorrecta: false
      }),
      respuesta4: this.fb.group({
        titulo: '',
        esCorrecta: false
      })
    });
  }

  ngOnInit(): void {
    console.log('objeto', this._quizzService.tituloCuestionario);
  }

  // tslint:disable-next-line:typedef
  agregarPreguntas() {

    if (this.agregarPregunta.invalid || this.todasIncorrectas()) {
      this.error();
      return;
    }

    const listRespuesta: Respuesta[] = [];

    const arrayRespuestas = ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'];
    arrayRespuestas.map((ar) => {
      const rtaTitulo = this.agregarPregunta.get(ar)?.get('titulo')?.value;
      const isCorrect = this.agregarPregunta.get(ar)?.get('esCorrecta')?.value;

      const respuesta: Respuesta = {
        descripcion: rtaTitulo,
        esCorrecta: isCorrect
      };

      if (rtaTitulo !== '') {
        listRespuesta.push(respuesta);
      }
    });

    const tituloPregunta = this.agregarPregunta.get('titulo')?.value;
    const segundosPregunta = this.agregarPregunta.get('segundos')?.value;
    const puntosPregunta = this.agregarPregunta.get('puntos')?.value;

    const pregunta: Pregunta = {
      titulo: tituloPregunta,
      segundos: segundosPregunta,
      puntos: puntosPregunta,
      listRespuestas: listRespuesta
    };

    this._quizzService.agregarPregunta(pregunta);
    this.reset();

  }

  reset(): void {
    this.agregarPregunta.patchValue({
      titulo: '',
      segundos: 10,
      puntos: 100,
      respuesta1: {
        titulo: '',
        esCorrecta: false
      },
      respuesta2: {
        titulo: '',
        esCorrecta: false
      },
      respuesta3: {
        titulo: '',
        esCorrecta: false
      },
      respuesta4: {
        titulo: '',
        esCorrecta: false
      }
    });
  }

  todasIncorrectas(): boolean {

    const array = ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'];
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (this.agregarPregunta.get(array[index])?.get('esCorrecta')?.value === true) {
        return false;
      }
    }
    return true;
  }

  error(): void {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
    }, 3000);
  }

  // tslint:disable-next-line:typedef
  get seg() { return this.agregarPregunta.get('segundos')?.value; }
  // tslint:disable-next-line:typedef
  get puntos() { return this.agregarPregunta.get('puntos')?.value; }

  // tslint:disable-next-line:typedef
  sumarRestarSegundos(numero: number) {
    if (this.seg <= 5) {
      return;
    }

    if (this.seg >= 40) {
      return;
    }
    this.agregarPregunta.patchValue({
      segundos: this.seg + numero
    });
  }

  esCorrecta(index: string): void {
    const stringRta = 'respuesta';
    const nroRespuesta = stringRta.concat(index);
    this.setFalseRespuesta(nroRespuesta);

    const estadoRta = this.obtenerEstadoRespuesta(nroRespuesta);

    this.agregarPregunta.get(nroRespuesta)?.patchValue({
      esCorrecta: !estadoRta
    });
  }

  obtenerEstadoRespuesta(nro: string): boolean {
    return this.agregarPregunta.get(nro)?.get('esCorrecta')?.value;
  }

  setFalseRespuesta(nroRespuesta: string): void {
    const array = ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'];
    array.map((r) => {
      if (r !== nroRespuesta) {
        this.agregarPregunta.get(r)?.patchValue({
          esCorrecta: false
        });
      }
    });
  }
}
