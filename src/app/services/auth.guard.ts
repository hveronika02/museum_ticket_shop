import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('user') as string) ;
  if (user == null || user.length == 0) {
    return true;
  } else {
    // Ha nincs user, irányítsuk át a login oldalra
    return router.parseUrl('/login');
  }
};
