import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailViewExamplePage } from './detail-view-example.page';

const routes: Routes = [
  {
    path: '',
    component: DetailViewExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailViewExamplePage]
})
export class DetailViewExamplePageModule {}
