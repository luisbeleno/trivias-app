import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from './../../../models/cuestionario';
import { Pregunta } from './../../../models/pregunta';
import { QuizzService } from 'src/app/services/quizz.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-list-preguntas',
  templateUrl: './list-preguntas.component.html',
  styleUrls: ['./list-preguntas.component.css']
})
export class ListPreguntasComponent implements OnInit {

  listPreguntas: Pregunta[] = [];
  tituloCuestionario: string;
  descripcionCuestionario: string;

  constructor(private quizzService: QuizzService, private router: Router, private toastr: ToastrService) {
    this.quizzService.getPreguntas().subscribe(data => {
      this.listPreguntas.push(data);
    });
    this.tituloCuestionario = this.quizzService.tituloCuestionario;
    this.descripcionCuestionario = this.quizzService.descripcionCuestionario;
  }

  ngOnInit(): void {
    if (this.tituloCuestionario === '' || this.descripcionCuestionario === '') {
      this.router.navigate(['/dashboard']);
    }
  }

  eliminarPregunta(index: number): void {
    this.listPreguntas.splice(index, 1);
  }

  finalizarCuestionario(): void {

    const codigoQuiezz = this.generarCodigo();
    const usuario: User = JSON.parse(localStorage.getItem('user') || '{}');
    const cuestionario: Cuestionario = {
      uid: usuario.uid,
      titulo: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      codigo: codigoQuiezz,
      cntPreguntas: this.listPreguntas.length,
      fechaCrea: new Date(),
      listPreguntas: this.listPreguntas
    };
    console.log(cuestionario);

    this.quizzService.crearCuestionario(cuestionario).then((data) => {
      console.log(data);
      this.toastr.success('Trivia creada con exito!', 'Trivia registrada');
      this.router.navigate(['/dashboard']);
    }).catch(error => {
      console.log(error);
      this.toastr.success('Oops Trivia no creada!', 'Trivia');
    });

  }

  generarCodigo(): string {
    const code = nanoid(6).toUpperCase();
    return code;
  }

}
