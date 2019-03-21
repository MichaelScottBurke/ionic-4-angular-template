import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-banner-warning-example',
  templateUrl: './banner-warning-example.page.html',
  styleUrls: ['./banner-warning-example.page.scss'],
})
export class BannerWarningExamplePage implements OnInit {

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
