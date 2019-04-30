import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HubLayoutExample3Page } from './hub-layout-example3.page';

const routes: Routes = [
  {
    path: '',
    component: HubLayoutExample3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HubLayoutExample3Page]
})
export class HubLayoutExample3PageModule {}
