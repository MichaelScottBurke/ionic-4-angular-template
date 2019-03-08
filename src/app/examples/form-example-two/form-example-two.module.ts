import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormExampleTwoPage } from './form-example-two.page';

const routes: Routes = [
  {
    path: '',
    component: FormExampleTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormExampleTwoPage]
})
export class FormExampleTwoPageModule {}
