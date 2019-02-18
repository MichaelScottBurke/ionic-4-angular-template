import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RadioButtonsPage } from './radio-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: RadioButtonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RadioButtonsPage]
})
export class RadioButtonsPageModule {}
