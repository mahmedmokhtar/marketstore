
import { Component } from '@angular/core';
import { SHARED } from './shared/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SHARED],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'myshop';
}
