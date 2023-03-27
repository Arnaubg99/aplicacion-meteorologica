import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipioDestacado } from 'src/app/models/municipio-destacado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-meteorologia-provincia',
  templateUrl: './meteorologia-provincia.component.html',
  styleUrls: ['./meteorologia-provincia.component.css']
})
export class MeteorologiaProvinciaComponent implements OnInit {
  private ruta= inject(ActivatedRoute)
  private data = inject(DataService)
  title: string =""
  keywords: string = ""
  tiempoHoy: string = ""
  tiempoManana: string =""
  datosCargados: boolean = false
  municipiosDestacados: Array<MunicipioDestacado>
  municipios: Array<Municipio>
  municipiosObject: any
  municipiosProp: any
  idProvincia: number
  idSelectMunicipio: number


  constructor(){
    this.municipiosDestacados = []
    this.municipiosObject = []
    this.municipios = []
    this.municipiosProp = []
    this.idProvincia = 0
    this.idSelectMunicipio = 0
  }
  ngOnInit(){
    this.ruta.params.subscribe(params =>{
      this.data.getMeteorologiaProvincia(params['id']).subscribe(data=>{
        this.title = data.title
        this.keywords = data.keywords
        this.tiempoHoy = data.today.p
        this.tiempoManana = data.tomorrow.p
        this.idProvincia = data.provincia.CODPROV
        this.municipiosDestacados = data.ciudades.slice(0)
        this.datosCargados = true
      })
    })
    this.ruta.params.subscribe(params =>{
      this.data.getMunicipiosProvincia(params['id']).subscribe(data=>{
        this.municipiosObject = structuredClone(data.municipios)
        this.municipiosProp = Object.keys(this.municipiosObject)
        let i = 0
        for (let prop of this.municipiosProp) {
          this.municipios.push(this.municipiosObject[prop]);
          i++;
        }
        console.log(this.municipiosDestacados.length)
      })
    })
  }
}
