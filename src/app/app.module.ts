import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from "./modules/shared/layout/header/header.component";
import { FooterComponent } from "./modules/shared/layout/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        // SharedModule,
        NgOptimizedImage,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppModule { }
