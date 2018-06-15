import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'ion-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootPage:any = HomeComponent;

  // Configuration of the time picker (format 12H with a default date and time)
  //private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

  constructor(
    private platform:Platform,
    private statusBar:StatusBar,
    private splashScreen:SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("ionic platform ready");
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
