import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars, faCartShopping , faCog , faLanguage} from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, Output } from '@angular/core';
import { SHARED } from '../../../shared/shared';
import { Inotificion } from '../../../core/models/inotificion';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss',
  imports:[SHARED]
})
export class DashboardHeader {
  @Output() sidenavToggled = new EventEmitter<boolean>();
  iscollaped :boolean = false
  faSearch=faSearch; faBars= faBars ;faCartShopping = faCartShopping
  faUser = faUser ; faCog = faCog ;faLanguage =faLanguage;fabell = faBell
      sidenavToggle(){
      this.iscollaped = !this.iscollaped
      this.sidenavToggled.emit(this.iscollaped)
      }
  notiflist:Inotificion []=[
    {notimg:'assets/img/notiv/avtar.png', title :'Donoghue Susan' , des:'Hi, How are you? What about our next meeting'},
    {notimg:'assets/img/notiv/avtar2.png' , title :'Jacob Gines' , des:'Answered to your comment on the cash flow forecast'},
    {notimg:'assets/img/notiv/avtar.png' , title :'Shawn Bunch' , des:'Commented on Admin'},
    {notimg:'assets/img/notiv/avtar2.png', title :'Shawn Bunch' , des:'Commented on Admin'},
  ]
}
