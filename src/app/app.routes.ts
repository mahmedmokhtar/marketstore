import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth.routes';
import { ACCOUNT_ROUTES } from './account/account.routes';
import { LANDING_ROUTES } from './landing/landing.routes';
import { DASHBOARD_ROUTES } from './dashboard/dashboard.route';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () => import('./landing/my-shop/my-shop').then(m => m.MyShop),
  },
  ...AUTH_ROUTES,
  ...LANDING_ROUTES,
  ...DASHBOARD_ROUTES,
  ...ACCOUNT_ROUTES,
  { path: '**', redirectTo: 'landing', pathMatch: 'full' } // Redirect any unknown paths to the root
];
