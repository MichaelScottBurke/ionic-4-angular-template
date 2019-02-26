import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular'
import { ModalExamplePage } from '../examples/modal-example/modal-example.page';



@Component({
  selector: 'app-modal-layout',
  templateUrl: './modal-layout.page.html',
  styleUrls: ['./modal-layout.page.scss'],
})
export class ModalLayoutPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }
 
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalExamplePage,
      componentProps: {
        "paramID": '1',
        "paramTitle": "Enjoy using UltiPro?",
        "paramSubtitle": "Test subtitle"
      },
      cssClass: "modal-dialog"
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);
      }
    });
 
    return await modal.present();
  }

  ngOnInit() {
  }

}
