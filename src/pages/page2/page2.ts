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
  categorie: string;
  items: Array<{title: string, note: string, icon: string}>;
  shows: Array<{id: number, Author: any, Title: string, Date: string, Time: string, Place: string, Image: string, Price: number, Categorie: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.categorie = navParams.get('categorie');
    // console.log(this.selectedItem);

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
        Time: "20",
        Place: "Zenith, Paris",
        Image: "img/show5.jpg",
        Price: 55,
        Categorie: "Hip-Hop"
      },
      {
        id: 2,
        Author: {
          Name: "PSG",
          Image: "img/artist2.png"
        },
        Title: "Ligue 1 - PSG/Marseille",
        Date: "29 Janvier",
        Time: "20",
        Place: "Stade de France, Paris",
        Image: "img/show2.jpg",
        Price: 30,
        Categorie: "Football"
      },
      {
        id: 3,
        Author: {
          Name: "U2",
          Image: "img/artist3.png"
        },
        Title: "Concert U2",
        Date: "2 Février",
        Time: "20",
        Place: "Zenith, Paris",
        Image: "img/show3.jpg",
        Price: 100,
        Categorie: "Rock"
      },
      {
        id: 4,
        Author: {
          Name: "Opéra de Paris",
          Image: "img/artist4.png"
        },
        Title: "Carmen",
        Date: "29 janvier",
        Time: "20",
        Place: "Opéra de Paris",
        Image: "img/show4.jpg",
        Price: 40,
        Categorie: "Metal"
      },
      {
        id: 5,
        Author: {
          Name: "Taylor Swift",
          Image: "img/artist5.jpg"
        },
        Title: "Concert Taylor Swift",
        Date: "28 janvier",
        Time: "20",
        Place: "Zenith, Paris",
        Image: "img/show1.jpg",
        Price: 100,
        Categorie: "Hip-Hop"
      },
      {
        id: 6,
        Author: {
          Name: "Gad Elmaleh",
          Image: "img/artist6.jpg"
        },
        Title: "Gad sur scène",
        Date: "29 janvier",
        Time: "20",
        Place: "Point Virgule, Paris",
        Image: "img/show6.jpg",
        Price: 20,
        Categorie: "Comique"
      }
    ];
  }

  itemTapped(event, item) {
    console.log(item);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      item: item
    });
  }
}
