import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-banner-error-example',
  templateUrl: './banner-error-example.page.html',
  styleUrls: ['./banner-error-example.page.scss'],
})
export class BannerErrorExamplePage implements OnInit {

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

}
