import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {CartService} from '../../cart.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  searchText: string = '';
  selectedCategory: string = '';

  cart: any[] = [];
  products = [
    { id: 1, name: 'T-Shirt', category: 'Clothing', price: 25 },
    { id: 2, name: 'Sneakers',category: 'Clothing', price: 80 },
    { id: 3, name: 'TV', category: 'Electronics',price: 150 },
    { id: 4, name: 'Backpack',category: 'Clothing', price: 45 },
    { id: 5, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 6, name: 'Shirt', category: 'Clothing', price: 25 },
    { id: 7, name: 'Headphones', category: 'Electronics', price: 19 },
    { id: 8, name: 'Jeans', category: 'Clothing', price: 40 }
  ];
  constructor(private router: Router, private cartService: CartService) {}

  get filteredProducts() {
    return this.products.filter(p =>
      (!this.selectedCategory || p.category === this.selectedCategory) &&
      (!this.searchText || p.name.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }


  viewDetails(product: any) {
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

}
