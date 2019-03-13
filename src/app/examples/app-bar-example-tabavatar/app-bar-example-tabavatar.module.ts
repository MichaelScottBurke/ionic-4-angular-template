import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleTabavatarPage } from './app-bar-example-tabavatar.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleTabavatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleTabavatarPage]
})
export class AppBarExampleTabavatarPageModule {}
