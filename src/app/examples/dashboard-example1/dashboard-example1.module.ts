import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardExample1Page } from './dashboard-example1.page';
import { EmployeesData } from 'src/providers/employees';

const routes: Routes = [
  {
    path: '',
    component: DashboardExample1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpModule,
    HttpClientModule
  ],
  declarations: [DashboardExample1Page],
  providers: [
    EmployeesData
  ]
})
export class DashboardExample1PageModule {}
