import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardOverExamplePage } from './card-over-example.page';

const routes: Routes = [
  {
    path: '',
    component: CardOverExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  //declarations: [CardOverExamplePage]
})
export class CardOverExamplePageModule {}
