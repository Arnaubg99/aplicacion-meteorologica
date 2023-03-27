import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeteorologiaProvinciaComponent } from './pages/meteorologia-provincia/meteorologia-provincia.component';
import { MetereologiaMunicipioComponent } from './pages/metereologia-municipio/metereologia-municipio.component';
import { ProvinciasComponent } from './pages/provincias/provincias.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'provincias', component: ProvinciasComponent},
  {path: 'meteorologia_provincia/:id', component: MeteorologiaProvinciaComponent},
  {path: 'meteorologia_municipio/:idProv/:idMun', component: MetereologiaMunicipioComponent},
  //Ruta inicial
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //Ruta error
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
