import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading, } from '@angular/router';

import { AppComponent } from './app/app.component';

const moduleoid = {
  // providers: [
  //   importProvidersFrom(HttpClientModule),
  //   provideRouter(
  //     APP_ROUTES,
  //     withPreloading(PreloadAllModules),
  //     withDebugTracing()
  //   ),
  // ],
};

const environment = { production: false };
if (environment.production) enableProdMode();

bootstrapApplication(AppComponent).catch(console.error);

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
