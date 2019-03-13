import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleBackPage } from './app-bar-example-back.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleBackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleBackPage]
})
export class AppBarExampleBackPageModule {}
