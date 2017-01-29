import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page4 } from '../page4/page4';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;
  show: any;
  items: Array<{title: string, note: string, icon: string}>;
  tickets: Array<{id: number, Categorie: string, Porte: string, Rang: string, Place: string, Prix: number, FauxPrix: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // populate sells
    this.show = this.selectedItem;
    console.log(this.show.Title);

    this.tickets = [
      {
        id: 1,
        Categorie: "CATEGORIE OR",
        Porte: "Porte Face A",
        Rang : "Rang AF",
        Place : "Place 46",
        Prix : 80,
        FauxPrix : 230
      },
      {
        id: 2,
        Categorie: "CATEGORIE 2",
        Porte: "Porte Face B",
        Rang : "Rang T",
        Place : "Place 78",
        Prix : 50,
        FauxPrix : 599
      },
      {
        id: 3,
        Categorie: "CATEGORIE 1",
        Porte: "Porte Face E",
        Rang : "Rang BD",
        Place : "Place 42",
        Prix : 80,
        FauxPrix : 230
      },
      {
        id: 4,
        Categorie: "FOSSE",
        Porte: "Porte Face D",
        Rang : "Rang JL",
        Place : "Place 23",
        Prix : 50,
        FauxPrix : 599
      },
      {
        id: 5,
        Categorie: "CATEGORIE 3",
        Porte: "Porte Face A",
        Rang : "Rang AF",
        Place : "Place 12",
        Prix : 80,
        FauxPrix : 230
      },
      {
        id: 6,
        Categorie: "CATEGORIE 4",
        Porte: "Porte Face B",
        Rang : "Rang T",
        Place : "Place 78",
        Prix : 50,
        FauxPrix : 599
      }
    ];
  }

  itemTapped(event, show, ticket ) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page4, {
      show: show,
      ticket: ticket
    });
  }
}
