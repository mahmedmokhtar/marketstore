import { Component } from '@angular/core';
import { SHARED } from '../../shared/shared';
import { faTrash , faEye , faEdit , faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.html',
  styleUrls: ['./orders.scss'],
  imports:[SHARED,FontAwesomeModule]
})
export class OrdersComponent {
faTrashAlt = faTrash ; faEye=faEye ; faEdit=faEdit; fapencil =faPencil
}
