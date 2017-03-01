import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Profile } from '../profile/profile';

/*
  Generated class for the FormUserInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form-user-info',
  templateUrl: 'form-user-info.html'
})
export class FormUserInfoPage {
  user:any = {};
  nav:NavController ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl;
    this.user.username = window.localStorage.getItem('username');
    this.user.password = window.localStorage.getItem('password');
    this.user.mail = window.localStorage.getItem('mail');
    this.user.nom = window.localStorage.getItem('nom');
    this.user.prenom = window.localStorage.getItem('prenom');
    this.user.tel = window.localStorage.getItem('tel');
    console.log(JSON.stringify(this.user));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormUserInfoPage');
  }

  login(){
    window.localStorage.setItem('username', this.user.username);
    window.localStorage.setItem('password', this.user.password);
    window.localStorage.setItem('mail', this.user.mail);
    window.localStorage.setItem('nom', this.user.nom);
    window.localStorage.setItem('prenom', this.user.prenom);
    window.localStorage.setItem('tel', this.user.tel);

    console.log('user info : ' + JSON.stringify(this.user));

    this.nav.push(Profile);
  }
}
