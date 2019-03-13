import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleMenuPage } from './app-bar-example-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleMenuPage]
})
export class AppBarExampleMenuPageModule {}
