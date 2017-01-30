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
  tickets: Array<{id: number, Categorie: string, Porte: string, Rang: string, Place: string, Prix: number, FauxPrix: number, Difference: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // populate sells
    this.show = this.selectedItem;
    console.log(JSON.stringify(this.selectedItem));

    if(this.selectedItem.id == 1){
    this.tickets = [
      {
        id: 1,
        Categorie: "CARRE OR",
        Porte: "Porte Face A",
        Rang : "Rang AF",
        Place : "Place 46",
        Prix : 110,
        FauxPrix : 180,
        Difference : 180 - 110
      },
      {
        id: 1,
        Categorie: "FOSSE",
        Porte: "Porte Face B",
        Rang : "Rang GT",
        Place : "Place 43",
        Prix : 55,
        FauxPrix : 90,
        Difference : 90 - 55
      },
      {
        id: 1,
        Categorie: "CATEGORIE 1",
        Porte: "Porte Face E",
        Rang : "Rang AF",
        Place : "Place 23",
        Prix : 70,
        FauxPrix : 105,
        Difference : 105 - 70
      } ]
    } else if(this.selectedItem.id == 2){
      this.tickets = [
        {
        id: 2,
       Categorie: "LATERAL HAUT",
       Porte: "Porte Face D",
       Rang : "Rang OP",
       Place : "Place 12",
       Prix : 30,
       FauxPrix : 60,
       Difference : 60 - 30

        },

        {
        id: 2,
        Categorie: "QUART DE VIRAGE",
        Porte: "Porte Face A",
        Rang : "Rang T",
        Place : "Place 78",
        Prix : 40,
        FauxPrix : 75,
        Difference : 75 - 40
      },

      {
        id: 2,
        Categorie: "TRIBUNE CENTRALE BAS",
        Porte: "Porte Face B",
        Rang : "Rang JH",
        Place : "Place 90",
        Prix : 90,
        FauxPrix : 150,
        Difference : 150 - 90
      }]

    }else if(this.selectedItem.id == 3){
      this.tickets = [
        {
        id: 3,
       Categorie: "CARRE OR",
       Porte: "Porte Face E",
       Rang : "Rang KL",
       Place : "Place 65",
       Prix : 195,
       FauxPrix : 263,
       Difference : 263 - 195

        },

        {
        id: 3,
       Categorie: "CATEGORIE 1",
       Porte: "Porte Face D",
       Rang : "Rang HI",
       Place : "Place 45",
       Prix : 100,
       FauxPrix : 178,
       Difference : 178 - 100

        },


  ]}else if(this.selectedItem.id == 4){
    this.tickets = [
      {
      id: 4,
     Categorie: "OPTIMA",
     Porte: "Porte Face A",
     Rang : "Rang TV",
     Place : "Place 76",
     Prix : 170,
     FauxPrix : 252,
     Difference : 252 - 170

      },

      {
      id: 4,
     Categorie: "CATEGORIE 3",
     Porte: "Porte Face B",
     Rang : "Rang AG",
     Place : "Place 43",
     Prix : 110,
     FauxPrix : 186,
     Difference : 186 - 110

      },

      {
      id: 4,
     Categorie: "CATEGORIE 7",
     Porte: "Porte Face E",
     Rang : "Rang BR",
     Place : "Place 89",
     Prix : 40,
     FauxPrix : 60,
     Difference : 60 - 40

      },

  ]} else if(this.selectedItem.id == 5){
    this.tickets = [
      {
      id: 5,
     Categorie: "CARRE OR",
     Porte: "Porte Face D",
     Rang : "Rang JL",
     Place : "Place 71",
     Prix : 150,
     FauxPrix : 200,
     Difference : 200 - 150

      },
      {
      id: 5,
      Categorie: "CATEGORIE 2",
      Porte: "Porte Face A",
      Rang : "Rang AF",
      Place : "Place 65",
      Prix : 100,
      FauxPrix : 140,
      Difference : 140 - 100

      }

  ]}else if(this.selectedItem.id == 6){
    this.tickets = [
      {
      id: 6,
     Categorie: "CATEGORIE 1",
     Porte: "Porte Face B",
     Rang : "Rang T",
     Place : "Place 24",
     Prix : 40,
     FauxPrix : 60,
     Difference : 60 - 40

      },
      {
      id: 6,
      Categorie: "CATEGORIE 2",
      Porte: "Porte Face D",
      Rang : "Rang AJ",
      Place : "Place 56",
      Prix : 20,
      FauxPrix : 35,
      Difference : 35 - 20

      }


]  }
}



  itemTapped(event, show, ticket ) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page4, {
      show: show,
      ticket: ticket
    });
  }
}
