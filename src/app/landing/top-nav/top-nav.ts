import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faCartShopping, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faHeart,faUser} from '@fortawesome/free-regular-svg-icons';
import { SHARED } from '../../shared/shared';

@Component({
  selector: 'app-top-nav',
  imports: [FontAwesomeModule,SHARED],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss'
})
export class TopNav {
faHeart = faHeart;
faCartShopping = faCartShopping;
faSearch = faSearch;
faUser = faUser;
faLanguage = faLanguage
}
