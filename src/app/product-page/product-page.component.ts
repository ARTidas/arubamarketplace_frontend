import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
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
}