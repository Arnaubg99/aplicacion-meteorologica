import { Breadcrumb } from "./breadcumb";
import { Ciudad } from "./ciudad";
import { ComunidadAutonoma } from "./comunidad-autonoma";
import { Hoy } from "./hoy";
import { Origen } from "./origen";
import { Provincia } from "./provincia";

export interface InformacionProvincia {
  breadcrumb:      Breadcrumb[];
  ciudades:        Ciudad[];
  comautonoma:     ComunidadAutonoma;
  keywords:        string;
  metadescripcion: string;
  origen:          Origen;
  provincia:       Provincia;
  title:           string;
  today:           Hoy;
  tomorrow:        Hoy;
 }








