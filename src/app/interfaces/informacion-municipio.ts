import { Ion } from "../enums/ion";
import { Breadcrumb } from "./breadcumb";
import { Municipio } from "./municipio";
import { Origen } from "./origen";
import { Pronostico } from "./pronostico";
import { ProximosDia } from "./proximos-dias";
import { Temperaturas } from "./temperaturas";

export interface InformacionMunicipio {
  breadcrumb:         Breadcrumb[];
  fecha:              Date;
  humedad:            string;
  imagen:             null;
  keywords:           string;
  lluvia:             string;
  metadescripcion:    string;
  municipio:          Municipio;
  origin:             Origen;
  precipitacion:      string;
  pronostico:         Pronostico;
  proximos_dias:      ProximosDia[];
  stateSky:           StateSky;
  temperatura_actual: string;
  temperaturas:       Temperaturas;
  title:              string;
  viento:             string;
 }

 export interface StateSky {
  description: Ion;
  id:          string;
 }












