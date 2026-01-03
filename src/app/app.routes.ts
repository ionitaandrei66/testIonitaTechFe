import { Routes } from '@angular/router';
import {productsGuard} from './gurads/products.guard';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'products',
    loadComponent: () =>
      import('../app/pages/products/products.component').then(m => m.ProductsComponent),
    canMatch: [productsGuard],
  },
];
