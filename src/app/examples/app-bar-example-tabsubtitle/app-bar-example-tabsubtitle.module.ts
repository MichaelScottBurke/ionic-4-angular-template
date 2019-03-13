import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleTabsubtitlePage } from './app-bar-example-tabsubtitle.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleTabsubtitlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleTabsubtitlePage]
})
export class AppBarExampleTabsubtitlePageModule {}
