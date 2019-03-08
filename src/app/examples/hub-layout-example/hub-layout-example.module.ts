import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HubLayoutExamplePage } from './hub-layout-example.page';

const routes: Routes = [
  {
    path: '',
    component: HubLayoutExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HubLayoutExamplePage]
})
export class HubLayoutExamplePageModule {}
