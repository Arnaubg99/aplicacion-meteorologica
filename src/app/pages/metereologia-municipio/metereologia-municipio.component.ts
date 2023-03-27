import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posicionGPS } from 'src/app/models/posicionGPS.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-metereologia-municipio',
  templateUrl: './metereologia-municipio.component.html',
  styleUrls: ['./metereologia-municipio.component.css']
})
export class MetereologiaMunicipioComponent {
  private ruta= inject(ActivatedRoute)
  data = inject(DataService)
  datosCargados: boolean = false
  infoMunicipio: any
  posicionMapa: posicionGPS
  temperaturas: any
  estadoCielo: string
  fecha: string
  caracteristicas: any
  fotoURL: string;
  date: Date
  hora: number
  pronosticos: any
  proximosDias: any
  salidaPuestaSol: any


  constructor( ){
    this.posicionMapa = {
      "lat": 0,
      "lng": 0
    }
    this.temperaturas = {
      "act": 0,
      "min": 0,
      "max": 0
    }
    this.estadoCielo=""
    this.fecha = ""
    this.caracteristicas={
      "p.lluvia": 0,
      "humedad": 0,
      "viento": 0
    }
    this.fotoURL=""
    this.date = new Date
    this.hora = this.date.getHours()
    this.pronosticos = {
      "pronosticoEstadoCielo": {
        "hoy": [],
        "manana": []
      },
      "pronosticoTemperatura": {
        "hoy": [],
        "manana": []
      },
      "pronosticoLluvia": {
        "hoy": [],
        "manana": []
      },
      "pronosticoNieve": {
        "hoy": [],
        "manana": []
      },
      "pronosticoViento": {
        "hoy": [],
        "manana": []
      }
    }
    this.salidaPuestaSol={
      "amanecer": "",
      "atardecer": ""
    }
  }

  ngOnInit(){
    this.ruta.params.subscribe(params =>{
      this.data.getMeteorologiaMunicipio(params['idProv'], params['idMun']).subscribe(data=>{
        this.datosCargados = true
        this.infoMunicipio = structuredClone(data.municipio)
        this.posicionMapa["lat"] = data.municipio.LATITUD_ETRS89_REGCAN95
        this.posicionMapa["lng"] = data.municipio.LONGITUD_ETRS89_REGCAN95
        this.temperaturas["act"] = data.temperatura_actual
        this.temperaturas["min"] = data.temperaturas.min
        this.temperaturas["max"] = data.temperaturas.max
        this.estadoCielo = data.stateSky.description
        this.fecha = data.fecha
        if(data.lluvia != ""){
          this.caracteristicas["p.lluvia"] = data.lluvia
        }
        this.caracteristicas["humedad"] = data.humedad
        this.caracteristicas["viento"] = data.viento
        this.fotoURL = this.data.cieloFotos[this.estadoCielo]

        this.pronosticos["pronosticoEstadoCielo"]["hoy"] = data.pronostico.hoy.estado_cielo.slice(0)
        this.pronosticos["pronosticoEstadoCielo"]["manana"] = data.pronostico.manana.estado_cielo.slice(0)
        this.pronosticos["pronosticoTemperatura"]["hoy"] = data.pronostico.hoy.temperatura.slice(0)
        this.pronosticos["pronosticoTemperatura"]["manana"] = data.pronostico.manana.temperatura.slice(0)
        this.pronosticos["pronosticoLluvia"]["hoy"] = data.pronostico.hoy.precipitacion.slice(0)
        this.pronosticos["pronosticoLluvia"]["manana"] = data.pronostico.manana.precipitacion.slice(0)
        this.pronosticos["pronosticoNieve"]["hoy"] = data.pronostico.hoy.nieve.slice(0)
        this.pronosticos["pronosticoNieve"]["manana"] = data.pronostico.manana.nieve.slice(0)
        this.pronosticos["pronosticoViento"]["hoy"] = data.pronostico.hoy.viento.slice(0)
        this.pronosticos["pronosticoViento"]["manana"] = data.pronostico.manana.viento.slice(0)

        this.proximosDias = structuredClone(data.proximos_dias)

        this.salidaPuestaSol.amanecer =data.pronostico.hoy["@attributes"].orto
        this.salidaPuestaSol.atardecer =data.pronostico.hoy["@attributes"].ocaso
      })
    })
  }
}
