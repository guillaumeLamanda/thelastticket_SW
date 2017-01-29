import { Component, Pipe } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Page3 } from '../page3/page3';

@Pipe({
  name: 'CatPipe'
})

export class CatPipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    // ES6 array destructuring
    let [cat] = args;
    return value.filter(show => {
      return show.categorie == cat;
    });
  }
}

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  pipes: [CatPipe]
})

export class Page2 {
  selectedItem: any;
  icons: string[];
  categorie: string;
  filterargs: {};
  items: Array<{title: string, note: string, icon: string}>;
  shows: Array<{id: number, Author: string, Title: string, Date: string, Place: string, Image: string, Price: number, Categorie: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.categorie = this.selectedItem;
    // console.log('Categorie : ' + this.categorie);
    if(this.categorie && this.categorie !== ''){
      this.filterargs = { categorie: this.categorie}
      console.log('filter set : ' + this.categorie);
    }
    // console.log("item : " + this.selectedItem);

    // populate sells
    this.shows = [
      {
        id: 1,
        Author: "Stromae",
        Title: "Concert Stromae",
        Date: "28 Janvier",
        Place: "Zenith, Paris",
        Image: "img/show5.jpg",
        Price: 79.50,
        Categorie: "Hip-Hop"
      },
      {
        id: 2,
        Author: "PSG",
        Title: "Ligue 1 - PSG/Marseille",
        Date: "29 Janvier",
        Place: "Stade de France, Paris",
        Image: "img/show2.jpg",
        Price: 56,
        Categorie: "Football"
      },
      {
        id: 3,
        Author: "U2",
        Title: "Concert U2",
        Date: "2 Février",
        Place: "Zenith, Paris",
        Image: "img/show3.jpg",
        Price: 110,
        Categorie: "Rock"
      },
      {
        id: 4,
        Author: "Opéra de Paris",
        Title: "Carmen",
        Date: "29 janvier",
        Place: "Opéra de Paris",
        Image: "img/show4.jpg",
        Price: 46,
        Categorie: "Metal"
      },
      {
        id: 5,
        Author: "Taylor Swift",
        Title: "Concert Taylor Swift",
        Date: "28 janvier",
        Place: "Zenith, Paris",
        Image: "img/show1.jpg",
        Price: 86,
        Categorie: "Hip-Hop"
      },
      {
        id: 6,
        Author: "Gad Elmaleh",
        Title: "Concert U2",
        Date: "29 janvier",
        Place: "Zenith, Paris",
        Image: "img/show2.jpg",
        Price: 22,
        Categorie: "Comique"
      }
    ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      categorie: item,
      item: item
    });
  }
}
