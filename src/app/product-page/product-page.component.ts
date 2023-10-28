import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})



export class ProductPageComponent implements OnInit {

  product: any;

  isDescriptionVisible: boolean = false;
  isIconExpanded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    
  ) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log(id); // Ellenőrizd, hogy az id itt megjelenik-e a konzolon
    });
  }

  
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log(id);
      if (!isNaN(id)) {
        this.productService.getById(id).subscribe(product => {
          this.product = product;
        });
      }
    });
  }

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
    this.isIconExpanded = !this.isIconExpanded;
  }
  
  addToCart() {
    // Kosárba helyezzük a terméket
    this.shoppingCartService.addToCart(this.product);
  }

}

