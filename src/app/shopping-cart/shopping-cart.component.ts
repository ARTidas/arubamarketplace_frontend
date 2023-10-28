import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css',]
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }
  removeFromCart(item: any) {
    // Távolítsuk el a kiválasztott terméket a kosárból
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      // Ellenőrizzük, hogy az ár stringként érkezik
      if (typeof item.price === 'string') {
        // Alakítsd át az árat számmá (pl. a parseFloat segítségével)
        const priceAsNumber = parseFloat(item.price);
        // Ellenőrizzük, hogy sikerült-e az átalakítás
        if (!isNaN(priceAsNumber)) {
          totalPrice += priceAsNumber;
        }
      } else if (typeof item.price === 'number') {
        // Ha már szám, akkor hozzáadhatjuk közvetlenül
        totalPrice += item.price;
      }
    }
    return parseFloat(totalPrice.toFixed(2));
  }

}
