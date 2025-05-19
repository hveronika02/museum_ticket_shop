import { CartItem } from "./CartItem";

export class Cart {
    items: CartItem[] = [];

    get totalPrice(): number {
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.ticket.price * item.quantity;
        });
        return totalPrice;
    }

    get totalCount(): number {
        let totalCount = 0;
        this.items.forEach(item => {
            totalCount += item.quantity;
        });
        return totalCount;
    }
    addItem(cartItem: CartItem): void {
        const existingItem = this.items.find(item => item.ticket.id === cartItem.ticket.id);
        if (existingItem) {
            existingItem.quantity += cartItem.quantity;  // meglévő mennyiség növelése
        } else {
            this.items.push(cartItem);
        }
    }

    removeItem(ticketId: string): void {
        this.items = this.items.filter(item => item.ticket.id !== ticketId);
    }

    updateQuantity(ticketId: string, quantity: number): void {
        const cartItem = this.items.find(item => item.ticket.id === ticketId);
        if (cartItem) {
            cartItem.quantity = quantity;
        }
    }
}
