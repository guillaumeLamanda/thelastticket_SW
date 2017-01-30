import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  categories: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, storage:Storage) {
    storage.set('categories', ["Rock", "Hip-Hop", "Electro", "Metal"]);
    storage.get('categories').then((categories) => {
      console.log('categories : ' + categories);
      this.categories = categories ;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  itemTapped(event, item) {
    console.log('categorie select : ' + item);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      categorie: item
    });
  }

}
