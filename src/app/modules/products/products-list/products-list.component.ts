import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator'

import { ProductsService } from '../products.service';
import { ProductQuickviewComponent } from '../product-quickview/product-quickview.component';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    ProductQuickviewComponent,
    HttpClientModule
  ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(public productsService: ProductsService) {
  }

  ngOnInit(): void {

    this.productsService.products$
      .subscribe({
        next: (products: IProduct[]) => {
          if (products.length === 0) {
            this.productsService.getProducts();
          }
        },
        error: err => {
          console.warn(err);
        }
      });
  }

}
