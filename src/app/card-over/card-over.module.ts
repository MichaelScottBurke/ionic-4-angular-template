import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardOverPage } from './card-over.page';
import { CardOverExamplePage } from '../examples/card-over-example/card-over-example.page';

const routes: Routes = [
  {
    path: '',
    component: CardOverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardOverPage, CardOverExamplePage]
})
export class CardOverPageModule {}
