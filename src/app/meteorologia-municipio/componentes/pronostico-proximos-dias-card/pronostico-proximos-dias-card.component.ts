import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximosDia } from '../../../interfaces/proximos-dias';
import { ImagenesCieloService } from '../../../servicios/imagenes-cielo/imagenes-cielo.service';
import { ImagenErrorDirective } from '../../../directivas/imagen-error.directive';

@Component({
  selector: 'app-pronostico-proximos-dias-card',
  standalone: true,
  imports: [CommonModule, ImagenErrorDirective],
  templateUrl: './pronostico-proximos-dias-card.component.html',
  styleUrl: './pronostico-proximos-dias-card.component.css'
})
export class PronosticoProximosDiasCardComponent {
  readonly ImagenesCieloService: ImagenesCieloService = inject(ImagenesCieloService);

  @Input() pronostico!: ProximosDia
}
