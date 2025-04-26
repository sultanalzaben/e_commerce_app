import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}


    login() {
      // Simple validation mock
      if (this.email && this.password) {
        this.router.navigate(['/products']);
      } else {
        alert('Please enter email and password.');
      }
    }



  goToRegister() {
    this.router.navigate(['/register']);
  }
}
