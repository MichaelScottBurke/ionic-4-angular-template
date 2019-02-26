import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ButtonsFabsPage } from './buttons-fabs.page';
import { FabExamplePage } from '../examples/fab-example/fab-example.page'

const routes: Routes = [
  {
    path: '',
    component: ButtonsFabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ButtonsFabsPage, FabExamplePage]
})
export class ButtonsFabsPageModule {}
