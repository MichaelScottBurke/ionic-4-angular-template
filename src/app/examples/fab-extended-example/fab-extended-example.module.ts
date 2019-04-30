import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FabExtendedExamplePage } from './fab-extended-example.page';

const routes: Routes = [
  {
    path: '',
    component: FabExtendedExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabExtendedExamplePage]
})
export class FabExtendedExamplePageModule {}
