import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem('user') as string) ;
  console.log("User:")
  console.log(user)
  if (user == null || user.length == 0 || user == "null") {
    // Ha nincs user, irányítsuk át a login oldalra
    console.log("User is not authenticated")
    return router.parseUrl('/login');
  } else {
    console.log("User is authenticated")
    return true
  }
};
