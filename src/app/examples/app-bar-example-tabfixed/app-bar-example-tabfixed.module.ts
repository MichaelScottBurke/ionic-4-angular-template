import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleTabfixedPage } from './app-bar-example-tabfixed.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleTabfixedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleTabfixedPage]
})
export class AppBarExampleTabfixedPageModule {}
