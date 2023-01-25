import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './modules/shared/layout/footer/footer.component';
import { HeaderComponent } from './modules/shared/layout/header/header.component';

@Component({
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    RouterOutlet,
    AsyncPipe,
    NgOptimizedImage,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dosti-client-ngweb';
}
