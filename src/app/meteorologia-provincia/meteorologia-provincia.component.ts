import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../servicios/api/api.service';
import { InformacionProvincia } from '../interfaces/informacion-provincia';
import { Municipio } from '../interfaces/municipio';
import { MunicipioLista } from '../interfaces/municipio-lista';
import { MunicipioDestacadoComponent } from '../componentes-globales/municipio-destacado/municipio-destacado.component';
import { LoadingComponent } from '../componentes-globales/loading/loading.component';

@Component({
  selector: 'app-meteorologia-provincia',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink, MunicipioDestacadoComponent, LoadingComponent],
  templateUrl: './meteorologia-provincia.component.html',
  styleUrl: './meteorologia-provincia.component.css'
})
export class MeteorologiaProvinciaComponent {
  readonly ruta: ActivatedRoute = inject(ActivatedRoute);
  readonly API_SERVICE: ApiService = inject(ApiService);

  informacionProvincia!: InformacionProvincia;
  listadoMunicipios!: MunicipioLista[];
  municipioId!: String;

  ngOnInit(){
    this.ruta.params.subscribe(params =>{
      let ruta_informacion_provincia_api = `provincias/${params['id']}`;
      this.API_SERVICE.getDatos(ruta_informacion_provincia_api).subscribe((respuesta: InformacionProvincia) => {
        this.informacionProvincia = respuesta
      }, error => {
        console.error(error)
      })

      let ruta_listado_municipios_api = `provincias/${params['id']}/municipios`;
      this.API_SERVICE.getDatos(ruta_listado_municipios_api).subscribe(respuesta => {
        this.listadoMunicipios = respuesta.municipios.map((municipio: Municipio)=>{
          return {
            id: municipio.CODIGOINE.slice(0, 5),
            nombre: municipio.NOMBRE
          }
        })
      }, error => {
        console.error(error)
      }
      )
    })
  }
}
