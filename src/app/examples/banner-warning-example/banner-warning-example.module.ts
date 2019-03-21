import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BannerWarningExamplePage } from './banner-warning-example.page';

const routes: Routes = [
  {
    path: '',
    component: BannerWarningExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BannerWarningExamplePage]
})
export class BannerWarningExamplePageModule {}
