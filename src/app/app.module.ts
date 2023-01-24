import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from '@angular/common';
// import { HeaderComponent } from "./modules/shared/layout/header/header.component";
// import { FooterComponent } from "./modules/shared/layout/footer/footer.component";

@NgModule({
    declarations: [
    ],
    providers: [],
    bootstrap: [],
    imports: [
        BrowserModule,
        // AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgOptimizedImage,
        // HeaderComponent,
        // FooterComponent
    ]
})
export class AppModule { }
