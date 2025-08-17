import { Route } from '@angular/router';
import { Account } from './account';

export const ACCOUNT_ROUTES: Route[] = [
 {
    path: 'account',
    component:  Account,
    children: [
      { path: 'profile', loadComponent: () => import('./profile/profile').then(m => m.Profile) },
      {path: '', redirectTo: 'profile', pathMatch: 'full'}, // Default route to profile
      { path: 'setting', loadComponent: () => import('./setting/setting').then(m => m.Setting) },
      { path: 'payments', loadComponent: () => import('./payments/payments').then(m => m.Payments) },
      { path: 'orders', loadComponent: () => import('./orders/orders').then(m => m.Orders) },
      { path: 'addresses', loadComponent: () => import('./addresses/addresses').then(m => m.Addresses) },
      { path: 'logout', loadComponent: () => import('./logout/logout').then(m => m.Logout) },
    ]
  }
];
