import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-fab-example2',
  templateUrl: './fab-example2.page.html',
  styleUrls: ['./fab-example2.page.scss'],
})
export class FabExample2Page implements OnInit {

  constructor(public menuCtrl: MenuController ) {
    this.menuCtrl.enable(false);
   }


  ngOnInit() {
  }

}
