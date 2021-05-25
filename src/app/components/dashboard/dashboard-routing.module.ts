import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
import { ListTriviasComponent } from './list-trivias/list-trivias.component';

const routes: Routes = [
  { path: '', component: ListTriviasComponent },
  { path: 'create', component: CreateQuizzComponent },
  { path: 'crearPreguntas', component: CrearPreguntaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
