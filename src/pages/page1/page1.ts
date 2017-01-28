import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  id: number;
  username: string;
  password: string;
  constructor(public navCtrl: NavController) {
    this.id = 1;
    this.username = '';
    this.password = '';
  }

  // Log the user
  login() {
    console.log(this.username);
    console.log('user logged');
  }

}
