import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  cartItems: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
    console.log('Cart Items:', this.cartItems);
    console.log('Total:', this.total);
  }

  name: string = '';
  address: string = '';

  constructor(private cartService: CartService, private router: Router) {}



  placeOrder() {
    if (!this.name || !this.address) {
      alert('Please fill out all fields.');
      return;
    }

    alert(`Order placed!\nThank you, ${this.name}.`);
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }
}
