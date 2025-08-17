
import { Mydashboard } from './mydashboard/mydashboard';
import { ProductsComponent } from './products/products';
import { OrdersComponent } from './orders/orders';
import { UsersComponent } from './users/users';
import { Route } from '@angular/router';
import { DashboardLayout } from './mydashboard/dashboard-layout/dashboard-layout';

export const DASHBOARD_ROUTES: Route[]= [
  {
    path: 'dashboard',
    component: Mydashboard,
    children: [
      {path:'dash-layout',component:DashboardLayout},
      {path:'', redirectTo:'dash-layout' , pathMatch:'full'},
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

