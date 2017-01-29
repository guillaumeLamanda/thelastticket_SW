import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {
  show: any;
  ticket: any;
  nbPlaces: number;
  countdown: string;
  countdownInt: number;
  initCountdown: number;
  width : string;
  //tickets: Array<{id: number, Categorie: string, Porte: string, Rang: string, Place: string, Prix: number, FauxPrix: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.show = navParams.get('show');
    this.ticket = navParams.get('ticket');
    console.log(this.countdownInt);
    this.initCountdown = 120;
    this.countdownInt = this.initCountdown;
    setInterval(() => { // <===
    if(this.countdownInt <= 0) {
      this.countdownInt = this.initCountdown;
    } else {
      this.countdownInt--;
    }
    var hour: number;
    var minute: number;
    var seconde: number;

    hour = Math.floor(this.countdownInt/3600);
    minute = Math.floor((this.countdownInt%3600)/60);
    seconde = this.countdownInt%60;
    if(hour > 0) {
      if(hour < 10) {
        this.countdown = "0";
      }
      this.countdown += hour.toString() + ":";
    }
    if(hour > 0) {
      if(minute < 10) {
        this.countdown = "0";
      }
      this.countdown += minute.toString() + ":";
    }
    if(seconde < 10) {
      this.countdown = "0";
    }
    this.countdown += seconde.toString();

    this.width = Math.round((this.countdownInt / this.initCountdown)*100).toString() + "%";
    console.log(this.width);

    console.log(this.countdown);
}, 1000);

  }

  updateTimer() {
      if(this.countdownInt <= 0) {
        this.countdownInt = 7200;
      } else {
        this.countdownInt--;
      }
      console.log(3);
    }
}
