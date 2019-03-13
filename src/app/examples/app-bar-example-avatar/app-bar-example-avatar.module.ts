import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleAvatarPage } from './app-bar-example-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleAvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleAvatarPage]
})
export class AppBarExampleAvatarPageModule {}
