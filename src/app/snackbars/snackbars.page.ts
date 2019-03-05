import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-snackbars',
  templateUrl: './snackbars.page.html',
  styleUrls: ['./snackbars.page.scss'],
})
export class SnackbarsPage {

  constructor(public toastController: ToastController, public toastCtrl: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your edits have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Your edits have been saved.',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }


  async successToast() {
    const toast = await this.toastController.create({
      message: 'Your edits have been saved.',
      showCloseButton: false,
      position: 'bottom',
      duration: 5000
      //closeButtonText: 'Done'
    });
    toast.present();
  }
}
