import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading, } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTES } from './app/app-routes';

const moduleoid = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
  ],
};

const environment = { production: false };
if (environment.production) enableProdMode();

bootstrapApplication(AppComponent, moduleoid).catch(console.error);

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
