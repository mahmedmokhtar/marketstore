import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SHARED } from '../../shared/shared';
import { Product } from '../../core/services/product';

@Component({
  selector: 'app-product.details',
  imports: [SHARED],
  templateUrl: './product.details.html',
  styleUrl: './product.details.scss'
})
export class ProductDetails {
  id:any;
  data:any={};
  constructor(private router:ActivatedRoute, private proser: Product) {
    this.id = this.router.snapshot.paramMap.get('id')
    console.log(this.id);

  }
ngOnInit(){
    this.getproduct();
  }
  getproduct(){
   this.proser.getproduct(this.id).subscribe((data:any)=> {
    this.data = data;
    console.log(this.data);
   })
  }

}
