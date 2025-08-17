import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SHARED } from '../../../shared/shared';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.html',
  styleUrl: './dashboard-sidenav.scss',
  imports:[SHARED]
})
export class DashboardSidenav {
  @Output() toggleSidenav:EventEmitter<boolean> = new EventEmitter()
  @Input() sidenavstatus : boolean = false

collapsed :boolean = true;

faxmark = faXmark;
listside:string[]=['orders','products','buyer','customer','invoices']
closeSidenave():void {
   this.collapsed = !this.collapsed
  this.toggleSidenav.emit(this.collapsed)
}
togglecollase():void {
  this.collapsed = !this.collapsed
  this.toggleSidenav.emit(this.collapsed)
}
}
