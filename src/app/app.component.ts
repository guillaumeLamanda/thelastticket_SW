import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { CategoriesPage } from '../pages/categories/categories';
import { UserInfoPage } from '../pages/user-info/user-info';
import { FormUserInfoPage } from '../pages/form-user-info/form-user-info';
import {UserCategoriesPage } from '../pages/user-categories/user-categories';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage = TabsPage;

  // Page 1 : authentification
  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Utilisateur', component: Page1 },
      { title: 'Evénements', component: Page2 },
      { title: 'PlaceConcert', component: Page3 },
      { title: 'Achat', component: Page4 },
      { title: 'Categories', component: CategoriesPage},
      { title: 'Vos informations', component: UserInfoPage},
      { title: 'Editer vos informations', component: FormUserInfoPage},
      { title: 'Catégorie utilisateur', component: UserCategoriesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  checkPreviousAuthorization(): void {
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null)) {
      this.rootPage = Page1;
    } else {
      this.rootPage = TabsPage;
      console.log('user finded : ' + window.localStorage.getItem('username'));
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
