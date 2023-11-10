import { Breadcrumb } from "./breadcumb";
import { Municipio } from "./municipio";
import { Origen } from "./origen";

export interface InformacionListadoMunicipios {
  breadcrumb:      Breadcrumb[];
  codprov:         string;
  keywords:        string;
  metadescripcion: string;
  municipios:      Municipio[];
  origen:          Origen;
  provincia:       any;
  title:           string;
 }



