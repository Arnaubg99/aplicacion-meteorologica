import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../servicios/api/api.service';
import { InformacionMunicipio } from '../../../interfaces/informacion-municipio';
import { ImagenErrorDirective } from '../../../directivas/imagen-error.directive';
import { TablaPronosticosComponent } from '../../componentes/tabla-pronosticos/tabla-pronosticos.component';
import { ImagenesCieloService } from '../../../servicios/imagenes-cielo/imagenes-cielo.service';
import { PronosticoProximosDiasCardComponent } from '../../componentes/pronostico-proximos-dias-card/pronostico-proximos-dias-card.component';
import { LoadingComponent } from '../../../componentes-globales/loading/loading.component';
import { MasInformacionComponent } from '../../componentes/mas-informacion/mas-informacion.component';

@Component({
  selector: 'app-meteorologia-municipio',
  standalone: true,
  imports: [CommonModule, ImagenErrorDirective, TablaPronosticosComponent, PronosticoProximosDiasCardComponent, LoadingComponent, MasInformacionComponent],
  templateUrl: './meteorologia-municipio.component.html',
  styleUrl: './meteorologia-municipio.component.css'
})
export class MeteorologiaMunicipioComponent {
  readonly ruta: ActivatedRoute = inject(ActivatedRoute);
  readonly API_SERVICE: ApiService = inject(ApiService);
  readonly ImagenesCieloService: ImagenesCieloService = inject(ImagenesCieloService);

  informacionMunicipio!: InformacionMunicipio;
  posicionMapa = {
    "lat": 0,
    "lng": 0
  };

  ngOnInit(){
    this.ruta.params.subscribe(params =>{
      let ruta_informacion_municipio_api = `provincias/${params['id-provincia']}/municipios/${params['id-municipio']}`;
      this.API_SERVICE.getDatos(ruta_informacion_municipio_api).subscribe((respuesta: InformacionMunicipio) => {
        this.informacionMunicipio = respuesta

        this.posicionMapa["lat"] = respuesta.municipio.LATITUD_ETRS89_REGCAN95
        this.posicionMapa["lng"] = respuesta.municipio.LONGITUD_ETRS89_REGCAN95
      }, error => {
        console.error(error)
      })
    })
  }
}
