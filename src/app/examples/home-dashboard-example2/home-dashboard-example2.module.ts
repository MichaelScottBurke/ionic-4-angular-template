import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeDashboardExample2Page } from './home-dashboard-example2.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardExample2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeDashboardExample2Page]
})
export class HomeDashboardExample2PageModule {}
