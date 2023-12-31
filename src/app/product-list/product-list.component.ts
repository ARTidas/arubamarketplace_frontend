import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html', 
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
 
  

  constructor(

    private productsService: ProductsService
  ) {}

  products: any = [];

  products_by_category: any = [];

  ngOnInit(): void {
    this.loadProducts();
    
  }

  loadProducts() {
    this.productsService.getProduct()
    .subscribe(
      data=> this.products = data
    )
  }

 
  
}


