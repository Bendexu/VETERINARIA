import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { authRoutes } from './auth/auth.routes';
import { pagesRoutes } from './pages/pages.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideRouter(authRoutes),
     provideRouter(pagesRoutes),
      provideClientHydration(
        withHttpTransferCacheOptions({
          includePostRequests: true,
        }),
      ),
      provideHttpClient(withFetch())
    ]
};