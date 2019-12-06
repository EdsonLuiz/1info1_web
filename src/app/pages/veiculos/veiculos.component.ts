import { Component, OnInit } from '@angular/core';
import { VeiculosService, Veiculos } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  _veiculos: Veiculos[] = [];

  constructor(private _veiculosService: VeiculosService) { }

  ngOnInit() {
    this._veiculos = this._veiculosService.getVeiculos()
    console.log(this._veiculos)
  }

}
