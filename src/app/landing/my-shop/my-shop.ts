import { Component } from '@angular/core';
import { TopNav } from '../top-nav/top-nav';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SHARED } from '../../shared/shared';
import { Slider } from '../components/slider/slider';

@Component({
  selector: 'app-my-shop',
  imports: [TopNav,SHARED,Slider],
  templateUrl: './my-shop.html',
  styleUrl: './my-shop.scss'
})
export class MyShop {
  faBars = faBars
  links:string[] = ["about","products" , "carts" , "blog" , "contact"]
}
