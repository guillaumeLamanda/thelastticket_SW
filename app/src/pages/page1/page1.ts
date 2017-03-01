import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
// import { App } from '../../app/app.component';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {
  nav: NavController;
  submited = 0 ;
  user = {};
  username:string ;
  storage:Storage ;

  constructor(public navCtrl: NavController, storage:Storage) {
    // this.id = 1;
    this.nav = navCtrl;
    this.storage = storage ;

    // Get username
    storage.get('username').then((username) => {
      console.log('username OK')
      this.username = username ;
      this.navCtrl.push(TabsPage);
    })

    if(this.username){
    }
  }

  // Log the user
  login(form) {
    console.log(JSON.stringify(this.user));
    if(this.username)
    {
      this.storage.set('username', this.username);
      window.localStorage.setItem('username', this.username);
      this.navCtrl.setRoot(TabsPage);
    }
  }

  clicked(event){
    console.log(event);

  }

  disconnect(){
    window.localStorage.removeItem('username');
    this.nav.setRoot(Page1);
  }
}
