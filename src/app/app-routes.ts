import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./modules/home/home.component').then((m) => m.HomeComponent) },
  { path: 'home1', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'errors', loadChildren: () => import('./core/errors/errors.module').then(m => m.ErrorsModule) },
  { path: '**', redirectTo: 'errors/not-found', pathMatch: 'full' },
];


