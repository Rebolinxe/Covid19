import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DadesService {
  constructor(private http: HttpClient) { }
  dadesTotals(){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/623z-r97q.json";
    return this.http.get(apiURL);
  }
  dadesMunicipis(){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?$select=municipi&$group=municipi";
    return this.http.get(apiURL);
  }
  dadesMunicipi(municipiSeleccionat: string){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?municipi="+municipiSeleccionat;
    return this.http.get(apiURL);
  } 
  dadesAllMunicipi(){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?$select=municipi,fabricant,sum(recompte)%20as%20total&$group=municipi,fabricant";
    return this.http.get(apiURL);
  } 
  dadesComarques(){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://analisi.transparenciacatalunya.cat/resource/irki-p3c7.json?$select=comarca,fabricant,sum(recompte)%20as%20total&$group=comarca,fabricant";
    return this.http.get(apiURL);
  } 
}