import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

@Component({
  standalone: true,
  imports: [
    NgmaterialModule,
    CommonModule,
    RouterLinkWithHref
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
}
