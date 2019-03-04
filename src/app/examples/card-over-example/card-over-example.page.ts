import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-card-over-example',
  templateUrl: './card-over-example.page.html',
  styleUrls: ['./card-over-example.page.scss'],
})
export class CardOverExamplePage implements OnInit {

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
