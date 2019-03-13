import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleTabPage } from './app-bar-example-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleTabPage]
})
export class AppBarExampleTabPageModule {}
