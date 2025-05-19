import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../shared/models/Ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TicketService } from '../../services/ticket/ticket.service';
import { CartService } from '../../services/cart/cart.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit  {

  ticket!: Ticket;
  quantity: number = 1;
  showNotification: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) {}

  addToCart(ticket: Ticket) {
    console.log(ticket)
    this.cartService.addToCart(this.ticket);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        this.ticketService.getTicketById(id).subscribe(ticket => {
          if (ticket) {
            this.ticket = ticket;
          } else {
            this.router.navigateByUrl('/not-found');
          }
        });
      }
    });
  }
  async onAddToCart() {
    const user = await this.authService.getCurrentUser();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
  
    this.cartService.addToCart(this.ticket, this.quantity);
    this.showNotification = true;
    setTimeout(() => this.showNotification = false, 2000);
  }
  

  navigateHome() {
    this.router.navigateByUrl('/');
  }

  navigateToRoute() {
    this.router.navigateByUrl('/');
  }
  

}
