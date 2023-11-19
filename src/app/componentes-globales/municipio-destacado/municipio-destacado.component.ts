import { ImagenesCieloService } from './../../servicios/imagenes-cielo/imagenes-cielo.service';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenErrorDirective } from '../../directivas/imagen-error/imagen-error.directive';
import { Ciudad } from '../../interfaces/ciudad';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'municipio-destacado',
  standalone: true,
  imports: [CommonModule, ImagenErrorDirective, RouterLink],
  templateUrl: './municipio-destacado.component.html',
  styleUrl: './municipio-destacado.component.css'
})
export class MunicipioDestacadoComponent {
  readonly imagenesCieloService: ImagenesCieloService;

  @Input() municipio!: Ciudad;
  fotoURL: string;

  constructor(){
    this.imagenesCieloService = inject(ImagenesCieloService);

    this.fotoURL = '';
  }

  ngOnInit(): void {
    this.fotoURL = this.imagenesCieloService.IMAGENES_CIELO[this.municipio.stateSky.description]
  }
}
