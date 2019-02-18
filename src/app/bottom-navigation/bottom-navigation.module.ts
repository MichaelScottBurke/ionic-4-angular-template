import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BottomNavigationPage } from './bottom-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: BottomNavigationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BottomNavigationPage]
})
export class BottomNavigationPageModule {}
