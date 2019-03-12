import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-app-bar-top-example',
  templateUrl: './app-bar-top-example.page.html',
  styleUrls: ['./app-bar-top-example.page.scss'],
})
export class AppBarTopExamplePage implements OnInit {

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }


  ngOnInit() {
  }

}
