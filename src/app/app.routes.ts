import { Routes } from '@angular/router';
import { AuthComponent } from '@auth/auth/auth.component';
import { HomeComponent } from '@home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
