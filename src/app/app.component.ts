import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    /*
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
    */
  ];

  public foundationPages = [
    {
      title: 'Color',
      url: '/color',
      icon: ''
    },
    {
      title: 'Typography',
      url: '/typography',
      icon: ''
    },
    {
      title: 'Iconography',
      url: '/iconography',
      icon: ''
    }
  ];

  public layoutPages = [
    {
      title: 'Card-over layout',
      url: '/card-over',
      icon: ''
    },
    {
      title: 'Detail view layout',
      url: '/detail-view',
      icon: ''
    },
    {
      title: 'Form layout',
      url: '/iconography',
      icon: ''
    },
    {
      title: 'List-detail layout',
      url: '/list-detail',
      icon: ''
    },
    {
      title: 'Hub layout',
      url: '/hub',
      icon: ''
    },
  ];

  public patternPages = [
    /*
    {
      title: 'Avatars',
      url: '/home',
      icon: ' '
    },
    */
    {
      title: 'Buttons',
      url: '/buttons',
      icon: ' '
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: ''
    },
    ,
    {
      title: 'Checkboxes',
      url: '/checkboxes',
      icon: ''
    },
    {
      title: 'Date pickers',
      url: '/date-pickers',
      icon: ''
    },
    {
      title: 'Dialogs',
      url: '/dialogs',
      icon: ''
    },
    {
      title: 'Grids',
      url: '/grids',
      icon: ''
    },
    {
      title: 'Lists',
      url: '/lists',
      icon: ''
    },
    {
      title: 'Menus',
      url: '/menus',
      icon: ''
    },
    {
      title: 'Radio buttons',
      url: '/radio-buttons',
      icon: ''
    },
    {
      title: 'Progress indicators',
      url: '/progress-indicators',
      icon: ''
    },
    {
      title: 'Steppers',
      url: '/steppers',
      icon: ''
    },
    {
      title: 'Switches',
      url: '/switches',
      icon: ''
    },
    {
      title: 'Text fields',
      url: '/text-fields',
      icon: ''
    }
  ]

  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
