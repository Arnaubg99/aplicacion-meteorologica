import { InformacionMunicipio } from './../../../interfaces/informacion-municipio';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-mas-informacion',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './mas-informacion.component.html',
  styleUrl: './mas-informacion.component.css'
})
export class MasInformacionComponent {
 @Input() informacionMunicipio!: InformacionMunicipio;
 posicionMapa;

 constructor(){
  this.posicionMapa = {
    "lat": 0,
    "lng": 0
  };
 }

 ngOnInit(): void {
  this.posicionMapa["lat"] = this.informacionMunicipio.municipio.LATITUD_ETRS89_REGCAN95
  this.posicionMapa["lng"] = this.informacionMunicipio.municipio.LONGITUD_ETRS89_REGCAN95

 }

}
