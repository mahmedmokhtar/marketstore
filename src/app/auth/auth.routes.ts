import { Route } from "@angular/router";
import { AuthLayout } from "./auth-layout/auth-layout";

export const AUTH_ROUTES: Route[] = [
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login').then(m => m.Login),
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login),
      },
      {
        path: 'register',
        loadComponent: () => import('./register/register').then(m => m.Resighter),
      },
      {
        path: 'change-password',
        loadComponent: () => import('./change-password/change-password').then(m => m.ChangePassword),
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./reset-password/reset-password').then(m => m.ResetPassword),
      },
      {
        path: 'forget-password',
        loadComponent: () => import('./forget-password/forget-password').then(m => m.ForgetPassword),
      },
      {
        path: 'verify',
        loadComponent: () => import('./verify/verify').then(m => m.Verify),
      },
      {
        path: 'resend-verify',
        loadComponent: () => import('./resend-verify/resend-verify').then(m => m.ResendVerify),
      },
    ]
  }
];
