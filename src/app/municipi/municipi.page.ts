import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
@Component({
  selector: 'app-municipi',
  templateUrl: './municipi.page.html',
  styleUrls: ['./municipi.page.scss'],
})
export class MunicipiPage implements OnInit {

  public totals: Array<any>;
  constructor(private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesAllMunicipi().subscribe(
      (data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.totals = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.totals);
      })
  }

}