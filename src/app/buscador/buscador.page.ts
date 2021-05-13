


import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  public totals: Array<any>;
  public municipis: Array<any>;
  public municipi: Array<any>;
  public municipiSeleccionat: String;
  public searchedItem: Array<any>;


  constructor(private dades: DadesService) { }

  ngOnInit() {

    this.municipiSeleccionat = "GURB"

    this.dades.dadesTotals().subscribe(
      (data: Array<any>) => {
      this.totals = data;
      console.log(this.totals);
      }),
    this.dades.dadesMunicipis().subscribe(
      (data: Array<any>) => {
      this.municipis = data;
      console.log(this.municipis);
    }) // ,
    // this.dades.dadesMunicipi().subscribe(
    //   (data: Array<any>) => {
    //   this.municipi = data;
    //   console.log(this.municipi);
    // })
  }
  _ionChange(event){
    const val = event.target.value;
    console.log(val);
    
    this.dades.dadesMunicipi(val.toUpperCase()).subscribe((data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.municipi = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.municipi);
    });
  }

}
