import { Component, OnInit } from '@angular/core';
import { SHARED } from '../../../shared/shared';
import { faBagShopping, faDollar,faBoxesPacking, faAward} from '@fortawesome/free-solid-svg-icons';
import { Icard } from '../../../shared/interface/icard';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SHARED],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss'
})
export class DashboardLayout  {
  faBagShopping = faBagShopping;faAward = faAward;
  faDollar = faDollar ;faBoxesPacking = faBoxesPacking;
  cardlist:Icard [] = [
    {avtarimg:faBagShopping ,title: 'Total Orders',number:13647},
    {avtarimg:faAward ,title: 'New Leads',number:9526},
    {avtarimg:faBoxesPacking ,title: 'Deals',number:976},
    {avtarimg:faDollar ,title: 'Booked Revenue',number:123.6},
  ]


}
