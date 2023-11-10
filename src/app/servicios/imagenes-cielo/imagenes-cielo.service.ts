import { Injectable } from '@angular/core';
import { arrayRutasImagenesCielo } from '../../interfaces/array-rutas-imagenes-cielo';

@Injectable({
  providedIn: 'root'
})

export class ImagenesCieloService {
  readonly IMAGENES_CIELO: arrayRutasImagenesCielo =
    {
    "Intervalos nubosos": "./assets/imagenes-cielo/solNube.svg",
    "Poco nuboso": "./assets/imagenes-cielo/solNube.svg",
    "Nubes altas": "./assets/imagenes-cielo/solNube.svg",
    "Nuboso": "./assets/imagenes-cielo/nube.svg",
    "Muy nuboso": "./assets/imagenes-cielo/nube.svg",
    "Despejado": "./assets/imagenes-cielo/sol.svg",
    "Cubierto": "./assets/imagenes-cielo/nube.svg",
    "Intervalos nubosos con lluvia escasa": "./assets/imagenes-cielo/lluvia.svg",
    "Intervalos nubosos con tormenta y lluvia escasa": "./assets/imagenes-cielo/nubeRayo.svg",
    "Cubierto con lluvia": "./assets/imagenes-cielo/lluvia.svg",
    "Cubierto con tormenta": "./assets/imagenes-cielo/nubeRayo.svg",
    "Nuboso con lluvia escasa": "./assets/imagenes-cielo/lluvia.svg",
    "Nuboso con tormenta": "./assets/imagenes-cielo/nubeRayo.svg",
    "Nuboso con lluvia": "./assets/imagenes-cielo/lluvia.svg",
    "Intervalos nubosos con lluvia": "./assets/imagenes-cielo/lluvia.svg",
    "Muy nuboso con lluvia escasa": "./assets/imagenes-cielo/nube.svg",
    "11": "./assets/imagenes-cielo/sol.svg",
    "11n": "./assets/imagenes-cielo/nube.svg",
    "12": "./assets/imagenes-cielo/solNube.svg",
    "12n": "./assets/imagenes-cielo/lunaNube.svg",
    "13": "./assets/imagenes-cielo/solNube.svg",
    "13n": "./assets/imagenes-cielo/lunaNube.svg",
    "14": "./assets/imagenes-cielo/nube.svg",
    "14n": "./assets/imagenes-cielo/nube.svg",
    "15": "./assets/imagenes-cielo/nube.svg",
    "15n": "./assets/imagenes-cielo/nube.svg",
    "16": "./assets/imagenes-cielo/nube.svg",
    "16n": "./assets/imagenes-cielo/nube.svg",
    "17": "./assets/imagenes-cielo/solNube.svg",
    "17n": "./assets/imagenes-cielo/lunaNube.svg",
    "24": "./assets/imagenes-cielo/lluvia.svg",
    "24n": "./assets/imagenes-cielo/lunaNubeLluvia.svg",
    "25": "./assets/imagenes-cielo/lluvia.svg",
    "25n": "./assets/imagenes-cielo/lluvia.svg",
    "26": "./assets/imagenes-cielo/lluvia.svg",
    "26n": "./assets/imagenes-cielo/lunaNubeLluvia.svg",
    "43": "./assets/imagenes-cielo/lluvia.svg",
    "43n": "./assets/imagenes-cielo/lunaNubeLluvia.svg",
    "44": "./assets/imagenes-cielo/lluvia.svg",
    "44n": "./assets/imagenes-cielo/lluvia.svg",
    "45": "./assets/imagenes-cielo/lluvia.svg",
    "45n": "./assets/imagenes-cielo/lluvia.svg",
    "46": "./assets/imagenes-cielo/nube.svg",
    "46n": "./assets/imagenes-cielo/nube.svg",
    "64": "./assets/imagenes-cielo/nubeRayo.svg",
    "64n": "./assets/imagenes-cielo/nubeRayo.svg",
    "81": "./assets/imagenes-cielo/solMar.svg",
    "81n": "./assets/imagenes-cielo/lunaMar.svg",
    "82": "./assets/imagenes-cielo/solMar.svg",
    "82n": "./assets/imagenes-cielo/lunaMar.svg",
  }
}
