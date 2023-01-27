import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../products.service';
import { MatPaginatorModule } from '@angular/material/paginator'
import { ProductQuickviewComponent } from '../product-quickview/product-quickview.component';
import { HttpClientModule } from '@angular/common/http';

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
    this.productsService.getProducts();
  }

}
