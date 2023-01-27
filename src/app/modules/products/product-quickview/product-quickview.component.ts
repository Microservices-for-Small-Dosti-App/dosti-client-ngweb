import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IProductQuickView } from './iproduct-quickview';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-quickview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
  ],
  templateUrl: './product-quickview.component.html',
  styleUrls: ['./product-quickview.component.scss']
})
export class ProductQuickviewComponent {

  @Input()
  product: IProductQuickView = {} as IProductQuickView;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }
}
