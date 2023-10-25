import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: string[] = [];

  addItem(item: string) {
    this.cartItems.push(item);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}
