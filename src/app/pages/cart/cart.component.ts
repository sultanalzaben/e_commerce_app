import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    this.loadCart();
  }

  decreaseItem(id: number) {
    this.cartService.decreaseQuantity(id);
    this.loadCart();
  }


  checkout() {
    this.router.navigate(['/checkout']);

  }

  continueShopping() {
    this.router.navigate(['/products']);
  }
}
