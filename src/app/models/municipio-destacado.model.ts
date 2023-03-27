export class MunicipioDestacado{
  "id": number;
  "idProvince": number;
  "name": string;
  "nameProvince": string;
  "stateSky":{
    "description": string;
    "id": number
  };
  "temperatures": {
    "max": number;
    "min": number;
  }
}
