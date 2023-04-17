import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cieloFotos: any

  constructor(private http: HttpClient) {
    this.cieloFotos =
      {
      "Intervalos nubosos": "./assets/solNube.svg",
      "Poco nuboso": "./assets/solNube.svg",
      "Nubes altas": "./assets/solNube.svg",
      "Nuboso": "./assets/nube.svg",
      "Muy nuboso": "./assets/nube.svg",
      "Despejado": "./assets/sol.svg",
      "Cubierto": "./assets/nube.svg",
      "Intervalos nubosos con lluvia escasa": "./assets/lluvia.svg",
      "Intervalos nubosos con tormenta y lluvia escasa": "./assets/nubeRayo.svg",
      "Cubierto con lluvia": "./assets/lluvia.svg",
      "Cubierto con tormenta": "./assets/nubeRayo.svg",
      "Nuboso con lluvia escasa": "./assets/lluvia.svg",
      "Nuboso con tormenta": "./assets/nubeRayo.svg",
      "Nuboso con lluvia": "./assets/lluvia.svg",
      "Intervalos nubosos con lluvia": "./assets/lluvia.svg",
      "Muy nuboso con lluvia escasa": "./assets/nube.svg",
      "11": "./assets/sol.svg",
      "11n": "./assets/nube.svg",
      "12": "./assets/solNube.svg",
      "12n": "./assets/lunaNube.svg",
      "13": "./assets/solNube.svg",
      "13n": "./assets/lunaNube.svg",
      "14": "./assets/nube.svg",
      "14n": "./assets/nube.svg",
      "15": "./assets/nube.svg",
      "15n": "./assets/nube.svg",
      "16": "./assets/nube.svg",
      "16n": "./assets/nube.svg",
      "17": "./assets/solNube.svg",
      "17n": "./assets/lunaNube.svg",
      "24": "./assets/lluvia.svg",
      "24n": "./assets/lunaNubeLluvia.svg",
      "25": "./assets/lluvia.svg",
      "25n": "./assets/lluvia.svg",
      "26": "./assets/lluvia.svg",
      "26n": "./assets/lunaNubeLluvia.svg",
      "43": "./assets/lluvia.svg",
      "43n": "./assets/lunaNubeLluvia.svg",
      "44": "./assets/lluvia.svg",
      "44n": "./assets/lluvia.svg",
      "45": "./assets/lluvia.svg",
      "45n": "./assets/lluvia.svg",
      "46": "./assets/nube.svg",
      "46n": "./assets/nube.svg",
      "64": "./assets/nubeRayo.svg",
      "64n": "./assets/nubeRayo.svg",
      "81": "./assets/solMar.svg",
      "81n": "./assets/lunaMar.svg",
      "82": "./assets/solMar.svg",
      "82n": "./assets/lunaMar.svg",
    }
   }
   getInfoNacional(): Observable<any>{
    return this.http.get("https://www.el-tiempo.net/api/json/v2/home")
   }
   getProvincias(): Observable<any>{
    return this.http.get("https://www.el-tiempo.net/api/json/v2/provincias")
   }
   getMunicipios(): Observable<any>{
    return this.http.get("https://www.el-tiempo.net/api/json/v1/municipios")
   }
   getMunicipiosProvincia(id: number): Observable<any>{
    return this.http.get("https://www.el-tiempo.net/api/json/v2/provincias/"+id+"/municipios")
   }
   getMeteorologiaProvincia(id: number): Observable<any>{
    return this.http.get("https://www.el-tiempo.net/api/json/v2/provincias/"+id)
   }
   getMeteorologiaMunicipio(idProvincia: number, idMunicipio: number): Observable<any>{
      return this.http.get("https://www.el-tiempo.net/api/json/v2/provincias/"+idProvincia+"/municipios/"+idMunicipio)
   }
}
