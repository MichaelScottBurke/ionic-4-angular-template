import { Component } from '@angular/core';
import { ModalController, MenuController} from '@ionic/angular';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { async } from 'q';

@Component({
  selector: 'app-date-range-example',
  templateUrl: './date-range-example.page.html',
  styleUrls: ['./date-range-example.page.scss'],
})
export class DateRangeExamplePage {
  constructor(public modalCtrl: ModalController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }


  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Start and end dates',
      //color: 'secondary',
      closeIcon: true,
      doneLabel: 'save'
    };
  
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });
  
    myCalendar.present();
  
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    const from: CalendarResult = date.from;
    const to: CalendarResult = date.to;
  
    console.log(date, from, to);
  }
  
}
