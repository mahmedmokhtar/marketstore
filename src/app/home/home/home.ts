import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import { About } from "./about/about";
import { myServices } from "./services/services";
import { Testimonail } from "./testimonail/testimonail";

@Component({
  selector: 'app-home',
  imports: [SHARED, About, myServices, Testimonail],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
