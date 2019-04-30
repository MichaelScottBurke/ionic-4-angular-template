import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hub-layout-example2',
  templateUrl: './hub-layout-example2.page.html',
  styleUrls: ['./hub-layout-example2.page.scss'],
})
export class HubLayoutExample2Page implements OnInit {

  pays = [
    {
      amount: '$2,034.17', 
      date: 'Feb 2',
      hours: '67 hours',
      insights: true,
    },
    {
      amount: '$2,265.32', 
      date: 'Jan 19',
      hours: '72 hours',
      insights: false,
    },
    {
      amount: '$2,600.50', 
      date: 'Jan 5',
      hours: '80 hours',
      insights: true,
    },
    {
      amount: '$2,375.20', 
      date: 'Dec 22',
      hours: '88 hours',
      insights: false,
    },
    {
      amount: '$2,981.29', 
      date: 'Dec 8',
      hours: '82 hours',
      insights: false,
    }
  ];

  taxes = [
    {
      name: 'W2 (Federal)',
      description: '2017 Form W-2 Wage & Tax Statement'
    },
    {
      name: 'W4 (Federal)',
      description: '2017 Employee\'s Withholding Allowance Certificate'
    },
    {
      name: 'NJ-W4 (state)',
      description: '2017 Employee\'s Withholding Allowance Certificate'
    }
  ];

  banks = [
    {
      name: 'Chase',
      amount: 'Available balance', 
      type: 'Checking'
    },
    {
      name: 'Chase',
      amount: '$500.00', 
      type: 'Savings'
    },
    {
      name: 'Fidelity Investments',
      amount: '$400.00', 
      type: 'Savings'
    }
  ];


  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
