import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Page4 } from '../page4/page4';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  tickets: Array<{id: number, Categorie: string, Porte: string, Rang: string, Place: string, Prix: number, FauxPrix: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // populate sells
    this.tickets = [
      {
        id: 1,
        Categorie: "Categorie or",
        Porte: "Porte Face A",
        Rang : "Rang AF",
        Place : "Place 46",
        Prix : 80,
        FauxPrix : 230
      },
      {
        id: 2,
        Categorie: "Categorie 2",
        Porte: "Porte Face B",
        Rang : "Rang T",
        Place : "Place 78",
        Prix : 50,
        FauxPrix : 599
      }
    ];
  }

//  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
  //  this.navCtrl.push(Page2, {
    //  item: item
  //  });
//  }
}
