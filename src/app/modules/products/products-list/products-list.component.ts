import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../products.service';
import { MatPaginatorModule } from '@angular/material/paginator'
import { ProductQuickviewComponent } from '../product-quickview/product-quickview.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    ProductQuickviewComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  constructor(public productsService: ProductsService) {
  }

}
