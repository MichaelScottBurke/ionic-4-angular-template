import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-banner-info-example',
  templateUrl: './banner-info-example.page.html',
  styleUrls: ['./banner-info-example.page.scss'],
})
export class BannerInfoExamplePage implements OnInit {

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
