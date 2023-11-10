import { Ion } from "../enums/ion";
import { VientoAttributes } from "./viento-attributes";
import { VientoElement } from "./viento-element";

export interface ProximosDia {
  "@attributes":            ProximosDiaAttributes;
  cota_nieve_prov:          CotaNieveProvElement[] | PurpleCotaNieveProv;
  estado_cielo:             string[] | string;
  estado_cielo_descripcion: Ion[] | string;
  humedad_relativa:         HumedadRelativa;
  prob_precipitacion:       string[] | string;
  racha_max:                Array<CotaNieveProvElement | string> | PurpleCotaNieveProv | string;
  sens_termica:             HumedadRelativa;
  temperatura:              HumedadRelativa;
  uv_max?:                  string;
  viento:                   VientoElement[] | PurpleViento;
 }

 export interface ProximosDiaAttributes {
  fecha: Date;
 }

 export interface CotaNieveProvElement {
  "@attributes": VientoAttributes;
 }

 export interface PurpleCotaNieveProv {
 }

 export interface HumedadRelativa {
  dato?:  string[];
  maxima: string;
  minima: string;
 }

 export interface PurpleViento {
  direccion: string;
  velocidad: string;
 }

