import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./modules/home/home.component').then((c) => c.HomeComponent) },
  { path: 'errors/not-found', loadComponent: () => import('./core/errors/not-found/not-found.component').then(c => c.NotFoundComponent) },
  { path: '**', redirectTo: 'errors/not-found', pathMatch: 'full' },
];

