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
  shows: Array<{id: number, Author: string, Title: string, Date: string, Place: string, Image: string, Prix: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // populate sells
    this.shows = [
      {
        id: 1,
        Author: "Stromae",
        Title: "Concert Stromae",
        Date: "28 Janvier",
        Place: "Zenith, Paris",
        Image: "img/show1.jpg",
        Prix: 79.50
      },
      {
        id: 2,
        Author: "PSG",
        Title: "Ligue 1 - PSG/Marseille",
        Date: "29 Janvier",
        Place: "Stade de France, Paris",
        Image: "img/show2.jpg",
        Prix: 56
      },
      {
        id: 3,
        Author: "U2",
        Title: "Concert U2",
        Date: "2 Février",
        Place: "Zenith, Paris",
        Image: "img/show3.jpg",
        Prix: 110
      },
      {
        id: 4,
        Author: "Opéra de Paris",
        Title: "Carmen",
        Date: "29 janvier",
        Place: "Opéra de Paris",
        Image: "img/show4.jpg",
        Prix: 46
      },
      {
        id: 5,
        Author: "Taylor Swift",
        Title: "Concert Taylor Swift",
        Date: "28 janvier",
        Place: "Zenith, Paris",
        Image: "img/show1.jpg",
        Prix: 86
      },
      {
        id: 6,
        Author: "Gad Elmaleh",
        Title: "Concert U2",
        Date: "29 janvier",
        Place: "Zenith, Paris",
        Image: "img/show2.jpg",
        Prix: 22
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
