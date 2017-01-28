import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  shows: Array<{id: number, Author: string, Title: string, Date: string, Place: string, Image: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // populate sells
    this.shows = [
      {
        id: 1,
        Author: "Stromae",
        Title: "Concert Stromae",
        Date: "28-01-2017",
        Place: "Zenith, Paris",
        Image: "img/show1.jpg"
      },
      {
        id: 2,
        Author: "U2",
        Title: "Concert U2",
        Date: "29-01-2017",
        Place: "Zenith, Paris",
        Image: "img/show2.jpg"
      }
    ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      item: item
    });
  }
}
