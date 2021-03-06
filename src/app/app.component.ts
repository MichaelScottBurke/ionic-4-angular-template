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
      url: '/forms',
      icon: ''
    },
    {
      title: 'List-detail layout',
      url: '/list-detail',
      icon: ''
    },
    {
      title: 'Modal layout',
      url: '/modal-layout',
      icon: ''
    },
    {
      title: 'Hub layout',
      url: '/hub',
      icon: ''
    },
  ];

  public patternPages = [
    {
      title: 'App Bars',
      url: '/app-bars'
    },
    {
      title: 'Banners',
      url: '/banners',
      icon: ''
    },
    {
      title: 'Bottom Navigation',
      url: '/bottom-navigation',
      icon: ''
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: ''
    },
    {
      title: 'Buttons: FABs',
      url: '/buttons-fabs',
      icon: ''
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: ''
    },
    {
      title: 'Checkboxes',
      url: '/checkboxes',
      icon: ''
    },
    {
      title: 'Chips',
      url: '/chips',
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
      title: 'Progress indicators',
      url: '/progress-indicators',
      icon: ''
    },
    {
      title: 'Radio buttons',
      url: '/radio-buttons',
      icon: ''
    },
    {
      title: 'Select inputs',
      url: '/select-inputs',
      icon: ''
    },
    {
      title: 'Sheets',
      url: '/sheets',
      icon: ''
    },
    {
      title: 'Snackbars',
      url: '/snackbars',
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
      title: 'Tabs',
      url: '/tabs',
      icon: ''
    },
    {
      title: 'Text fields',
      url: '/text-fields',
      icon: ''
    }
  ];

  public examplePages = [
    {
      title: 'Form example 1',
      url: '/form-example',
      icon: ''
    },
    {
      title: 'Form inputs',
      url: '/form-input-width',
      icon: ''
    },
    {
      title: 'Hub layout example 2',
      url: '/hub-layout-example2',
      icon: ''
    },
    {
      title: 'Hub layout example 1',
      url: '/hub-layout-example',
      icon: ''
    },
    /*,
    {
      title: 'Modal example 1',
      url: '/modal-example',
      icon: ''
    },
    */
   {
    title: 'Grid example masonry',
    url: '/grid-example-masonry',
    icon: ''
  },
    {
      title: 'Dashboard example 1',
      url: '/dashboard-example1',
      icon: ''
    },
    {
      title: 'Dashboard example 2',
      url: '/home-dashboard-example2',
      icon: ''
    }
  ];
  

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
