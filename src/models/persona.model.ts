import {Entity, model, property} from '@loopback/repository';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    //generated: false,
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Pass: string;

  @property({
    type: 'string',
    required: true,
  })
  Rol: string;

  @property({
    type: 'number',
    required: true,
  })
  Puntos: number;


  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;