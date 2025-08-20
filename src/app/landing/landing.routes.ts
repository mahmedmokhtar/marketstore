import { Products } from './products/products';
import { Route } from "@angular/router";
import { MyShop } from "./my-shop/my-shop";
import { About } from "./about/about";
import { Cart } from './cart/cart';


export const LANDING_ROUTES: Route[] = [
    {  path: 'landing',
      component: MyShop,
      children: [
        {
          path: '',
          loadComponent: () => import('./my-shop/my-shop').then(m => m.MyShop)
        },
        {path:"about" , component:About},
        {path:"products" , component:Products},
        {path:"carts" , component:Cart},

      ]
    }
]
