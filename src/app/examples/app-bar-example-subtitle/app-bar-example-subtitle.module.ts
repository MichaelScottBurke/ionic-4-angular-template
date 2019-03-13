import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppBarExampleSubtitlePage } from './app-bar-example-subtitle.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarExampleSubtitlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppBarExampleSubtitlePage]
})
export class AppBarExampleSubtitlePageModule {}
