import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BottomNavigationExamplePage } from './bottom-navigation-example.page';

const routes: Routes = [
  {
    path: '',
    component: BottomNavigationExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BottomNavigationExamplePage]
})
export class BottomNavigationExamplePageModule {}
