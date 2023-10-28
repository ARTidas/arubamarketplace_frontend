import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.shoppingCartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  handleCheckout() {
    const totalPrice = this.calculateTotalPrice(); // Számold ki az összesített árat
    this.router.navigate(['/checkout', { totalPrice }]); // Átirányítás a checkout oldalra
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      if (typeof item.price === 'string') {
        const priceAsNumber = parseFloat(item.price);
        if (!isNaN(priceAsNumber)) {
          totalPrice += priceAsNumber;
        }
      } else if (typeof item.price === 'number') {
        totalPrice += item.price;
      }
    }
    return parseFloat(totalPrice.toFixed(2));
  }
}
