export class PronosticoProximoDia{
  "@attributes": {
    "fecha": Date
  };
  "cota_nieve_prov": Array<any>;
  "estado-cielo": Array<any>;
  "humedad_relativa": {
    "maxima": number,
    "minima": number
  };
  "prob_precipitacion": Array<any>;
  "racha_max": Array<any>;
  "sens_termica": {
    "maxima": number,
    "minima": number
  };
  "temperatura": {
    "maxima": number,
    "minima": number
  };
  "uv_max": number;
  "viento": {
    "direccion": string,
    "velocidad": number
  }
  estado_cielo: any;
}
