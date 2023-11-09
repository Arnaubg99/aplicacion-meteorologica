import { EstadoCielo } from './estado-cielo';
import { Temperaturas } from './temperaturas';
export interface Ciudad {
  id:           string;
  idProvince:   string;
  name:         string;
  nameProvince: string;
  stateSky:     EstadoCielo;
  temperatures: Temperaturas;
 }
