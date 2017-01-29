import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {
  show: any;
  ticket: any;
  //tickets: Array<{id: number, Categorie: string, Porte: string, Rang: string, Place: string, Prix: number, FauxPrix: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.show = navParams.get('show');
    this.ticket = navParams.get('ticket');

  }
}
