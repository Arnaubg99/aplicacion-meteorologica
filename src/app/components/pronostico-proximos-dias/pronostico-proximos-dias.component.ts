import { Component, inject, Input, OnInit } from '@angular/core';
import { PronosticoProximoDia } from 'src/app/models/pronostico-proximos-dias.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pronostico-proximos-dias',
  templateUrl: './pronostico-proximos-dias.component.html',
  styleUrls: ['./pronostico-proximos-dias.component.css']
})
export class PronosticoProximosDiasComponent implements OnInit{
  @Input() datos = new PronosticoProximoDia
  fotoURL:string = ""
  private data = inject(DataService)


  ngOnInit(){
    if(typeof this.datos.estado_cielo == "object"){
      this.fotoURL = this.data.cieloFotos[this.datos.estado_cielo[0]]

    }else{
      this.fotoURL = this.data.cieloFotos[this.datos.estado_cielo]
    }
  }

}

