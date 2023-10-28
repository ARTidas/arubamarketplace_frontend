import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  categories: any = [];
  selectedCategory: string = '';
  categoryItems: any[] = []; // Tárold itt a kategóriához tartozó elemeket

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getCategory()
    .subscribe(
      data => this.categories = data
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.productsService.getCategoryItem(category)
      .subscribe(data => {
        this.categoryItems = data; // Tárold a kategóriához tartozó elemeket
      });
  }
}
