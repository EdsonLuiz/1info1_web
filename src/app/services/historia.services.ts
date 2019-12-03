import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable()
export class HistoriaService {

  private historias: any[] = data;

  constructor() {
    console.log('Servico funcionando');
  }

  getHistorias() {
    return this.historias;
  }
}

export interface Historias {
  title: string;
  content: string;
}
