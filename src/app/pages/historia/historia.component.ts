import { Component, OnInit } from '@angular/core';
import { HistoriaService, Historias } from 'src/app/services/historia.services';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  historias: Historias[] = [];

  constructor(private _historiaService: HistoriaService) { }

  ngOnInit() {
    this.historias = this._historiaService.getHistorias();
    console.log(this.historias);
  }

}
