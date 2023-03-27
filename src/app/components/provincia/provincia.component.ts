import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provincia } from 'src/app/models/provincia.model';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit{
  @Input() provincia: Provincia
  id: number
  constructor(){
    this.id = 0
    this.provincia = {
      "CODPROV": 0,
      "NOMBRE_PROVINCIA": "",
      "CODAUTON": 0,
      "COMUNIDAD_CIUDAD_AUTONOMA": "",
      "CAPITAL_PROVINCIA": ""
    }
  }

  ngOnInit(){
    this.id = this.provincia["CODPROV"]
  }
}
