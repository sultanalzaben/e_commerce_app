import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  products = [
    { id: 1, name: 'T-Shirt', category: 'Clothing', price: 25, description: 'A cool T-shirt for everyday wear.', imageUrl: 'assets/tshirt.jpg' },
    { id: 2, name: 'Sneakers', category: 'Clothing', price: 80, description: 'Comfortable sneakers for running.', imageUrl: 'assets/sneakers.jpg' },
    { id: 3, name: 'TV', category: 'Electronics', price: 150, description: '40-inch LED TV with HD resolution.', imageUrl: 'assets/tv.jpg' },
    { id: 4, name: 'Backpack', category: 'Clothing', price: 45, description: 'Durable backpack for all your needs.', imageUrl: 'assets/backpack.jpg' },
    { id: 5, name: 'Laptop', category: 'Electronics', price: 999, description: 'High-performance laptop for work and play.', imageUrl: 'assets/laptop.jpg' },
    { id: 6, name: 'Shirt', category: 'Clothing', price: 25, description: 'Stylish and comfortable shirt.', imageUrl: 'assets/shirt.jpg' },
    { id: 7, name: 'Headphones', category: 'Electronics', price: 19, description: 'Wireless headphones with great sound.', imageUrl: 'assets/headphones.jpg' },
    { id: 8, name: 'Jeans', category: 'Clothing', price: 40, description: 'Classic blue jeans with a modern fit.', imageUrl: 'assets/jeans.jpg' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === productId);
  }


}



