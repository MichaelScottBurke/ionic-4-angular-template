import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopAppBarExample2Page } from './top-app-bar-example2.page';

const routes: Routes = [
  {
    path: '',
    component: TopAppBarExample2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopAppBarExample2Page]
})
export class TopAppBarExample2PageModule {}
