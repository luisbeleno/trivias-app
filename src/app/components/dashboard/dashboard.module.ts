import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListTriviasComponent } from './list-trivias/list-trivias.component';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
import { SharedModule } from '../shared/shared.module';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { ListPreguntasComponent } from './list-preguntas/list-preguntas.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, ListTriviasComponent, CreateQuizzComponent, CrearPreguntaComponent, ListPreguntasComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
