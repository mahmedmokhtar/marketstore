import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import { DashboardSidenav } from "./dashboard-sidenav/dashboard-sidenav";
import { DashboardHeader } from "./dashboard-header/dashboard-header";
import { faBars, faBell, faCartShopping, faCog, faLanguage, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mydashboard',
  imports: [SHARED, DashboardSidenav, DashboardHeader],
  templateUrl: './mydashboard.html',
  styleUrl: './mydashboard.scss'
})
export class Mydashboard {
   faSearch=faSearch; faBars= faBars ;faCartShopping = faCartShopping
    faUser = faUser ; faCog = faCog ;faLanguage =faLanguage;fabell = faBell
  dashlist:string[] = ['dashboard','products','orders','users', 'categories', 'coupons', 'brands', 'customers', 'reports', 'settings'];
  issidecollapse = false
  toggleSidenav(date:boolean):void{
    this.issidecollapse = date
  }
  sidenavstauts:boolean = false
}
