import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleAvatarstartPage } from './app-bar-example-avatarstart.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleAvatarstartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleAvatarstartPage]
})
export class AppBarExampleAvatarstartPageModule {}
