
import { Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



// If you have providers, add them to SHARED, otherwise you can remove SHARED or keep it empty.
export const SHARED: Provider[] = [
    CommonModule,
  RouterModule,
  RouterOutlet,
  RouterLink,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  FontAwesomeModule,




];

