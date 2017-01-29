import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page2 } from '../page2/page2';

/*
  Generated class for the Categories page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  categories = ["Rock", "Hip-Hop", "Electro", "Metal"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  itemTapped(event, item) {
    console.log('item : ' + item);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }

}
