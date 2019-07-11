import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormInputWidthPage } from './form-input-width.page';

const routes: Routes = [
  {
    path: '',
    component: FormInputWidthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormInputWidthPage]
})
export class FormInputWidthPageModule {}
