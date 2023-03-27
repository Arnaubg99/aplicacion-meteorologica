import { Component, inject, Input } from '@angular/core';
import { MunicipioDestacado } from 'src/app/models/municipio-destacado.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-municipio-destacado',
  templateUrl: './municipio-destacado.component.html',
  styleUrls: ['./municipio-destacado.component.css']
})
export class MunicipioDestacadoComponent {
  private data = inject(DataService)
  @Input() municipio = new MunicipioDestacado
  idProvincia: number = 0
  idMunicipio: number = 0
  fotoURL: string = ""
  estadoCielo:string = ""

  ngOnInit(){
    this.idMunicipio = this.municipio.id
    this.idProvincia = this.municipio.idProvince
    this.estadoCielo  = this.municipio.stateSky.description
    this.fotoURL = this.data.cieloFotos[this.estadoCielo]
  }
}
