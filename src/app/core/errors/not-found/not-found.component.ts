import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

@Component({
  standalone: true,
  imports: [
    NgmaterialModule,
    NgOptimizedImage,
    CommonModule,
    RouterLinkWithHref,
  ],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

}
