import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {InitPage} from './pages/init/init';

@Component({
  template: '<ion-nav swipeBackEnabled="true" [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    let initialized = false;
    if(initialized) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = InitPage;
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [], {
  backButtonText: '',
  pageTransition: 'ios'
});
