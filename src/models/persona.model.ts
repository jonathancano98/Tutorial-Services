import {Entity, model, property} from '@loopback/repository';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    //generated: false,
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  contra: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  @property({
    type: 'number',
    required: true,
  })
  puntuacion: number;


  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
