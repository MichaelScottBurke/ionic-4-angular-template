import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BannerExamplePage } from './banner-example.page';

const routes: Routes = [
  {
    path: '',
    component: BannerExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BannerExamplePage]
})
export class BannerExamplePageModule {}
