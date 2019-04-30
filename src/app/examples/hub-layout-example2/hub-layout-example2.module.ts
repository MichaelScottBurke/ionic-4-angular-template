import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HubLayoutExample2Page } from './hub-layout-example2.page';

const routes: Routes = [
  {
    path: '',
    component: HubLayoutExample2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HubLayoutExample2Page]
})
export class HubLayoutExample2PageModule {}
