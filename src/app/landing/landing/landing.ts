import { SHARED } from './../../shared/shared';
import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { TopNav } from '../top-nav/top-nav';

@Component({
  selector: 'app-landing',
  imports: [SHARED,TopNav],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  faBars = faBars
  links:string[] = ["about","products" , "carts" , "blog" , "contact"]
}
