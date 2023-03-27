import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pronostico',
  templateUrl: './pronostico.component.html',
  styleUrls: ['./pronostico.component.css']
})
export class PronosticoComponent {
  @Input() estadoCielo: string
  @Input() temperatura: number
  @Input() probLluvia: number
  @Input() nieve: number
  @Input() viento: number
  @Input() hora: number

  constructor(){
    this.estadoCielo = ""
    this.temperatura = 0
    this.probLluvia = 0
    this.nieve = 0
    this.viento = 0
    this.hora = 0
  }
}
