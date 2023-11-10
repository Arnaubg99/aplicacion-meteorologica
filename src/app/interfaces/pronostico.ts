import { Ion } from "../enums/ion";
import { VientoElement } from "./viento-element";

export interface Pronostico {
  hoy:    Hoy;
  manana: Hoy;
 }

 export interface Hoy {
  "@attributes":            HoyAttributes;
  estado_cielo:             string[];
  estado_cielo_descripcion: Ion[];
  humedad_relativa:         string[];
  nieve:                    string[];
  precipitacion:            string[];
  prob_nieve:               string[];
  prob_precipitacion:       string[];
  prob_tormenta:            string[];
  racha_max:                string[];
  sens_termica:             string[];
  temperatura:              string[];
  viento:                   VientoElement[];
 }


 export interface HoyAttributes {
  fecha: Date;
  ocaso: string;
  orto:  string;
 }


