import { APP_INITIALIZER, Injector } from '@angular/core';
import { Router } from '@angular/router';

function appInitializerFactory(injector: Injector) {
  return () => {
    const router = injector.get(Router);
    router.initialNavigation(); 

    if (router.url !== '') {
      router.navigate(['']);
    }
  };
}

export const appInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitializerFactory,
  deps: [Injector],
  multi: true
};
