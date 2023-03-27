import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  provincias: Array<any>
  datosCargados: boolean = false

  constructor(public data: DataService){
    this.provincias = []
  }
  ngOnInit(){
    this.data.getProvincias().subscribe(data=>{
           this.provincias.push(data.provincias)
           this.datosCargados = true
        })
      console.log(this.provincias)
  }
}
