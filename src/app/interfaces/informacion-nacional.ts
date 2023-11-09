import { Ciudad } from "./ciudad";
import { Hoy } from "./hoy";
import { Origen } from "./origen";
import { Provincia } from "./provincia";

export interface InformacionNacional {
  breadcrumb:      any[];
  ciudades:        Ciudad[];
  keywords:        string;
  metadescripcion: string;
  origen:          Origen;
  provincias:      Provincia[];
  title:           string;
  today:           Hoy;
  tomorrow:        Hoy;
}








