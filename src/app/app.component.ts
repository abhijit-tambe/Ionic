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
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Calorie Calculator',
      url: '/calorie',
      icon: 'list'
    },
    // {
    //   title: 'Workout Log Book',
    //   url: '/workout',
    //   icon: 'list'
    // },
    {
      title: 'Workout Log Book',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Body Fat Calculator',
      url: '/fat',
      icon: 'list'
    },
    {
      title: 'Diet Plan',
      url: '/diet',
      icon: 'list'
    },
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
