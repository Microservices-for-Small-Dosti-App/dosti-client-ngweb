import { Component } from '@angular/core';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

@Component({
  standalone: true,
  imports: [NgmaterialModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
}
