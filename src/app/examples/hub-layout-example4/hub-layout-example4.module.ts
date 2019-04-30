import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HubLayoutExample4Page } from './hub-layout-example4.page';

const routes: Routes = [
  {
    path: '',
    component: HubLayoutExample4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HubLayoutExample4Page]
})
export class HubLayoutExample4PageModule {}
