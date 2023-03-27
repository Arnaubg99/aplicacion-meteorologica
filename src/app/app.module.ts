import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { HomeComponent } from './pages/home/home.component';
import { MeteorologiaProvinciaComponent } from './pages/meteorologia-provincia/meteorologia-provincia.component';
import { ProvinciasComponent } from './pages/provincias/provincias.component';
import { MunicipioDestacadoComponent } from './components/municipio-destacado/municipio-destacado.component';
import { MetereologiaMunicipioComponent } from './pages/metereologia-municipio/metereologia-municipio.component';
import { PronosticoComponent } from './components/pronostico/pronostico.component';
import { PronosticoProximosDiasComponent } from './components/pronostico-proximos-dias/pronostico-proximos-dias.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProvinciaComponent,
    HomeComponent,
    MeteorologiaProvinciaComponent,
    ProvinciasComponent,
    MunicipioDestacadoComponent,
    MetereologiaMunicipioComponent,
    PronosticoComponent,
    PronosticoProximosDiasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
