import { Ticket } from "./Ticket";

export class CartItem {
  id: string;
  ticket: Ticket;
  quantity: number;

  constructor(ticket: Ticket, quantity: number) {
    this.id = ticket.id;
    this.ticket = ticket;
    this.quantity = quantity;
  }

  get price(): number {
    return this.ticket.price * this.quantity;
  }
}
