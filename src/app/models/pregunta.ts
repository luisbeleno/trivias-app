import { Respuesta } from './respuesta';

export class Pregunta {
  titulo: string;
  puntos: number;
  segundos: number;
  listRespuestas: Respuesta[];

  constructor(titulo: string, puntos: number, segundos: number, listado: Respuesta[]) {
    this.titulo = titulo;
    this.puntos = puntos;
    this.segundos = segundos;
    this.listRespuestas = listado;
  }
}
