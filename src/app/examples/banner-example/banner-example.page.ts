import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-banner-example',
  templateUrl: './banner-example.page.html',
  styleUrls: ['./banner-example.page.scss'],
})
export class BannerExamplePage implements OnInit {


  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }
  

}
