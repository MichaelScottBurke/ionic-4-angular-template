import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BannerErrorExamplePage } from './banner-error-example.page';

const routes: Routes = [
  {
    path: '',
    component: BannerErrorExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BannerErrorExamplePage]
})
export class BannerErrorExamplePageModule {}
