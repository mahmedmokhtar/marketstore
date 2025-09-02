import { Route } from "@angular/router";
import { Home } from './home/home';

export const HOME_ROUTES: Route[]  = [
{path:"home",component:Home },
{path:"",redirectTo:'home',pathMatch:'full' },
]
