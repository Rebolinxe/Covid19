import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
@Component({
  selector: 'app-comarca',
  templateUrl: './comarca.page.html',
  styleUrls: ['./comarca.page.scss'],
})
export class ComarcaPage implements OnInit {

  public totals: Array<any>;
  constructor(private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesComarques().subscribe(
      (data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.totals = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.totals);
      })
  }

}