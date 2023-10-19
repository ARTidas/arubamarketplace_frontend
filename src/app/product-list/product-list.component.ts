import { Component, Input , OnInit, Output, EventEmitter} from '@angular/core';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html', // Ellenőrizd az elérési utat
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
 
  

  constructor(
    private productsService: ProductsService
  ) {}

  products: { id: number; name: string; price: number; description: string; }[] = [];

  ngOnInit(): void {
    this.loadProducts();
    
  }

  loadProducts() {
    this.products = this.productsService.getCheapest();
  }
 
  
}


