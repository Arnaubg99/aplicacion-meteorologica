import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(app => app.HomeComponent)
  },
  {
    path: 'meteorologia-provincia/:id',
    loadComponent: () => import('./meteorologia-provincia/meteorologia-provincia.component').then(app => app.MeteorologiaProvinciaComponent)
  },
  {
    path: 'meteorologia-municipio/:id-provincia/:id-municipio',
    loadComponent: () => import('./meteorologia-municipio/paginas/meteorologia-municipio/meteorologia-municipio.component').then(app => app.MeteorologiaMunicipioComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
