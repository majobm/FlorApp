import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth/auth.module';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    PagesModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    AuthModule,
    PagesModule,
    SharedModule,
    RouterModule

  ]
})
export class AppModule { }
