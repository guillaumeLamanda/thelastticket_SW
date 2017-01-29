import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { TabsPage } from '../tabs/tabs';
// import { App } from '../../app/app.component';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  nav: NavController;
  submited = 0 ;
  page2 = Page2;
  // app = App ;
  // id: number;
  user = {};
  username: string;
  password: string;
  constructor(public navCtrl: NavController) {
    // this.id = 1;
    this.username = window.localStorage.getItem('username')
    this.nav = navCtrl;

    if(this.username){
      console.log('user finded in p1 : ' + this.username);
      this.submited = 1;
    }
    // if(!this.username || this.username == ''){
    //   this.username = window.localStorage.getItem('username');
    // }
  }

  // Log the user
  login(form) {
    console.log(JSON.stringify(this.user));
    this.submited = 1;
    window.localStorage.setItem('username', this.username);
    this.navCtrl.push(TabsPage);
  }

  clicked(event){
    console.log(event);

  }

  disconnect(){
    window.localStorage.removeItem('username');
    this.nav.setRoot(Page1);
  }

}
