import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridExampleMasonryPage } from './grid-example-masonry.page';

const routes: Routes = [
  {
    path: '',
    component: GridExampleMasonryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridExampleMasonryPage]
})
export class GridExampleMasonryPageModule {}
