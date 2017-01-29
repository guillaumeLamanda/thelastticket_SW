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
  shows: Array<{id: number, Author: any, Title: string, Date: string, Place: string, Image: string, Price: number}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // populate sells
    this.shows = [
      {
        id: 1,
        Author: {
          Name: "Stromae",
          Image: "img/artist1.jpg"
        },
        Title: "Concert Stromae",
        Date: "28 Janvier",
        Place: "Zenith, Paris",
        Image: "img/show5.jpg",
        Price: 79.50
      },
      {
        id: 2,
        Author: {
          Name: "PSG",
          Image: "img/artist1.jpg"
        },
        Title: "Ligue 1 - PSG/Marseille",
        Date: "29 Janvier",
        Place: "Stade de France, Paris",
        Image: "img/show2.jpg",
        Price: 56
      },
      {
        id: 3,
        Author: {
          Name: "U2",
          Image: "img/artist1.jpg"
        },
        Title: "Concert U2",
        Date: "2 Février",
        Place: "Zenith, Paris",
        Image: "img/show3.jpg",
        Price: 110
      },
      {
        id: 4,
        Author: {
          Name: "Opéra de Paris",
          Image: "img/artist1.jpg"
        },
        Title: "Carmen",
        Date: "29 janvier",
        Place: "Opéra de Paris",
        Image: "img/show4.jpg",
        Price: 46
      },
      {
        id: 5,
        Author: {
          Name: "Taylor Swift",
          Image: "img/artist1.jpg"
        },
        Title: "Concert Taylor Swift",
        Date: "28 janvier",
        Place: "Zenith, Paris",
        Image: "img/show1.jpg",
        Price: 86
      },
      {
        id: 6,
        Author: {
          Name: "Gad Elmaleh",
          Image: "img/artist1.jpg"
        },
        Title: "Concert U2",
        Date: "29 janvier",
        Place: "Zenith, Paris",
        Image: "img/show2.jpg",
        Price: 22
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
