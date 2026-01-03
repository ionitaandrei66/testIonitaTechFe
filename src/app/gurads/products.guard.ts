import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {catchError, map, of} from "rxjs";

export const productsGuard: CanMatchFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuth().pipe(
    map(() => true),
    catchError(() => of(router.parseUrl('/login')))
  );
};
