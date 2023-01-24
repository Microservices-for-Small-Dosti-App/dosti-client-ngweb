import { Component } from '@angular/core';
import { FooterComponent } from './modules/shared/layout/footer/footer.component';
import { HeaderComponent } from './modules/shared/layout/header/header.component';

@Component({
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dosti-client-ngweb';
}
