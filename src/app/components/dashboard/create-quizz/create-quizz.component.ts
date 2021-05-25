import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.css']
})
export class CreateQuizzComponent implements OnInit {

  cuestionarioForm: FormGroup;
  mostrarError = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _quizzService: QuizzService) {
    this.cuestionarioForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  siguiente(): void {

    if (this.cuestionarioForm.invalid) {
      this.mostrarError = true;
      setTimeout(() => {
        this.mostrarError = false;
      }, 3000);
    } else {
      this._quizzService.tituloCuestionario = this.cuestionarioForm.get('titulo')?.value;
      this._quizzService.descripcionCuestionario = this.cuestionarioForm.get('descripcion')?.value;
      this.router.navigate(['/dashboard/crearPreguntas']);
    }
  }

}
