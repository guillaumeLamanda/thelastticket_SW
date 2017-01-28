import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  page2 = Page2;
  // id: number;
  username: string;
  password: string;
  constructor(public navCtrl: NavController) {
    // this.id = 1;
    // this.username = '';
    // this.password = '';
  }

  // Log the user
  login(form) {
    this.username = "franck@gmail.com";
    console.log('user logged');
  }

  clicked(event){
    console.log(event);

  }

}
