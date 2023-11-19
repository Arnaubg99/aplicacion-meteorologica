import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../servicios/api/api.service';
import { InformacionNacional } from '../interfaces/informacion-nacional';
import { MunicipioDestacadoComponent } from '../componentes-globales/municipio-destacado/municipio-destacado.component';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../componentes-globales/loading/loading.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule, MunicipioDestacadoComponent, RouterLink, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly API_SERVICE: ApiService;
  informacionNacional!: InformacionNacional;
  provinciaId: number;

  constructor(){
    this.API_SERVICE = inject(ApiService);

    this.provinciaId = 0;
  }

  ngOnInit(): void {
    this.API_SERVICE.getDatos('home').subscribe((respuesta =>{
      this.informacionNacional = respuesta;
    }),
    error =>{
      console.error(error)
    })
  }
}
