import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active'
                 [routerLink]="['/welcome']">Home</a>
          </li>
          <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{ exact: true }"
                 [routerLink]="['/products']">Product List</a>
          </li>
          <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{ exact: true }"
                 [routerLink]="['/products', 0, 'edit']">Add Product</a>
          </li>
          <li><a class="nav-link" [routerLink]="['/customer']">Add Customer</a></li>
          <li><a class="nav-link" [routerLink]="['/book']">Add Book</a></li>
          <li><a class="nav-link" [routerLink]="['/booklist']">Book Lists</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
