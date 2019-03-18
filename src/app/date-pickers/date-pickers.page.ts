import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { async } from 'q';


@Component({
  selector: 'app-date-pickers',
  templateUrl: './date-pickers.page.html',
  styleUrls: ['./date-pickers.page.scss'],
})
export class DatePickersPage {
  constructor(public modalCtrl: ModalController) {}

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
