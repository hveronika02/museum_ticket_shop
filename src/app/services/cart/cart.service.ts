import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Ticket } from 'src/app/shared/models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() { }

  addToCart(ticket: Ticket, quantity: number = 1): void {
    let cartItem = this.cart.items.find(item => item.ticket.id === ticket.id);
    console.log(cartItem)
    if (cartItem) {
      // Ha már van ilyen jegy, növeljük a meglévő mennyiséget
      this.changeQuantity(ticket.id, cartItem.quantity + quantity);
    } else {
      // Új jegy hozzáadása megadott mennyiséggel
      const newItem = new CartItem(ticket, 1);
      console.log("New item added to cart!")
      console.log(newItem.ticket.name)
      newItem.quantity = quantity;
      this.cart.addItem(newItem);
    }
  }
  

  removeFromCart(ticketId: string): void {
    this.cart.removeItem(ticketId);
  }

  changeQuantity(ticketId: string, quantity: number): void {
    this.cart.updateQuantity(ticketId, quantity);
  }

  getCart(): Cart {
    return this.cart;
  }
}
