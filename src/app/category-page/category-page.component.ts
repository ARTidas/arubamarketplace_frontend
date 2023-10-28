import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
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
