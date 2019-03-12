import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarTopExamplePage } from './app-bar-top-example.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarTopExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarTopExamplePage]
})
export class AppBarTopExamplePageModule {}
