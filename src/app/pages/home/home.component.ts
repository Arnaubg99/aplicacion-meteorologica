import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private data = inject(DataService)
  municipiosDestacados: Array<any>
  provincias: Array<Provincia>
  datosCargados: boolean = false
  idSelectProvincia: number

  constructor(){
    this.municipiosDestacados = []
    this.provincias = []
    this.idSelectProvincia = 0
  }
  ngOnInit(){
    this.data.getInfoNacional().subscribe(data=>{
      this.municipiosDestacados = data.ciudades.slice(0)
      this.provincias = data.provincias.slice(0)
      this.datosCargados = true
    })
  }
}
