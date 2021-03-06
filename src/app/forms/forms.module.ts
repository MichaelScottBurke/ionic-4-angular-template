import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormsPage } from './forms.page';
import { FormExamplePage } from '../examples/form-example/form-example.page';
import { FormGridExamplePage } from '../examples/form-grid-example/form-grid-example.page';


const routes: Routes = [
  {
    path: '',
    component: FormsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormsPage, FormExamplePage, FormGridExamplePage]
})
export class FormsPageModule {}
