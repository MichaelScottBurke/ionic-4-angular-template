import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-dashboard-example2',
  templateUrl: './home-dashboard-example2.page.html',
  styleUrls: ['./home-dashboard-example2.page.scss'],
})
export class HomeDashboardExample2Page implements OnInit {
  briefings = [
    {
    title: 'Title 1',
    description: 'Description one',
    icon: ''
    },
    {
      title: 'Title 2',
      description: 'Description two',
      icon: ''
      },
      {
        title: 'Title 3',
        description: 'Description three',
        icon: ''
        }
  ]

  days = [
    {
      weekday: 'Mon',
      date: '19',
      today: true,
      event1: 'event 1',
      event2: '',
      event3: ''
    },
    {
      weekday: 'Tue',
      date: '20',
      today: true,
      event1: 'event 1',
      event2: '',
      event3: ''
    },
    {
      weekday: 'Wed',
      date: '21',
      today: true,
      event1: 'event 1',
      event2: '',
      event3: ''
    },
    {
      weekday: 'Thu',
      date: '22',
      today: true,
      event1: 'event 1',
      event2: '',
      event3: ''
    },
    {
      weekday: 'Fri',
      date: '23',
      today: true,
      event1: 'event 1',
      event2: '',
      event3: ''
    }
  ]

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }


  ngOnInit() {
  }

}
