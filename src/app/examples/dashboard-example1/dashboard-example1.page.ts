import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-example1',
  templateUrl: './dashboard-example1.page.html',
  styleUrls: ['./dashboard-example1.page.scss'],
})
export class DashboardExample1Page implements OnInit {

  shortcuts = [
    {
      label: 'one',
      img: ''
    },
    {
      label: 'two',
      img: ''
    },
    {
      label: 'three',
      img: ''
    },
    {
      label: 'four',
      img: ''
    },
    {
      label: 'five',
      img: ''
    },
    {
      label: 'six',
      img: ''
    },
    {
      label: 'seven',
      img: ''
    },
    {
      label: 'eight',
      img: ''
    },
    {
      label: 'nine',
      img: ''
    },
  ];

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
