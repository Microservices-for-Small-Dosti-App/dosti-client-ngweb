import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', loadComponent:
      () => import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent)
  },
  {
    path: 'home', loadComponent:
      () => import('./modules/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'products', loadComponent:
      () => import('./modules/products/products-list/products-list.component').then((c) => c.ProductsListComponent)
  },
  {
    path: 'errors/not-found', loadComponent:
      () => import('~core/errors/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
  { path: '**', redirectTo: 'errors/not-found', pathMatch: 'full' },
];


