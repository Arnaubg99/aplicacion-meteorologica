import { Direccion } from "../enums/direccion";
import { VientoAttributes } from "./viento-attributes";

export interface VientoElement {
  "@attributes": VientoAttributes;
  direccion:     Direccion;
  velocidad:     string;
 }


