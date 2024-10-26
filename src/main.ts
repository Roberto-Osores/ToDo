import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread the existing appConfig
  providers: [
    ...appConfig.providers || [], // Keep existing providers from appConfig
    provideHttpClient(), provideAnimations() // Add provideHttpClient to the providers
  ]
}).catch((err) => console.error(err));