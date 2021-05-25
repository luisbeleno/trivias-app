import { Pregunta } from './pregunta';

export class Cuestionario {
  id?: number;
  uid: string;
  titulo: string;
  descripcion: string;
  codigo: string;
  cntPreguntas: number;
  fechaCrea: Date;
  listPreguntas: Pregunta[];

  // tslint:disable-next-line:max-line-length
  constructor(uid: string, titulo: string, descripcion: string, codigo: string, cntPreguntas: number, fechaCrea: Date, lstPreguntas: Pregunta[]) {
    this.uid = uid;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.cntPreguntas = cntPreguntas;
    this.fechaCrea = fechaCrea;
    this.listPreguntas = lstPreguntas;
  }
}
