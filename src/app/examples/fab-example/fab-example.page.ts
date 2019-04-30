import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fab-example',
  templateUrl: './fab-example.page.html',
  styleUrls: ['./fab-example.page.scss'],
})
export class FabExamplePage implements OnInit {

  banks = [
    {
      name: 'Chase',
      nickname: 'Long-term savings',
      account: '***6273',
      amount: '$500.00'
    },
    {
      name: 'Fidelity Investments',
      nickname: 'Investment savings',
      account: '***7178',
      amount: '$500.00'
    },
    {
      name: 'Bank of New York',
      nickname: 'Main checking',
      account: '***4975',
      amount: '10% (about $300.00)'
    }
  ]

  constructor(public menuCtrl: MenuController ) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
