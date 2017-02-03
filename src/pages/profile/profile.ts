import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';

import { Page1 } from '../page1/page1';
import { UserCategoriesPage } from '../user-categories/user-categories';
import { FormUserInfoPage } from '../form-user-info/form-user-info';

@Component({
    selector: "page-profile",
    templateUrl: "profile.html"
})

export class Profile {
  nav:NavController;
  username: string;
  mail: string;
  nom: string;
  prenom: string;
  tel: number;
  categories: string[] ;
    constructor(public navCtrl: NavController) {
      this.nav = navCtrl;
      this.username = window.localStorage.getItem('username');
      this.mail = window.localStorage.getItem('mail');
      this.nom = window.localStorage.getItem('nom');
      this.prenom = window.localStorage.getItem('prenom');
      this.tel = parseInt(window.localStorage.getItem('tel'));
      // this.categories = window.localStorage.getItem('categories');
      console.log(this.username);
    }

    disconnect(){
      console.log('disconnect event');
      window.localStorage.removeItem('username');
      this.nav.setRoot(Page1);
    }

    openUserInfo(){
      this.nav.push(FormUserInfoPage);
    }

    openUserCategories(){
      this.nav.push(UserCategoriesPage);
    }

    EditUserInfo(){
      this.nav.push(FormUserInfoPage);
    }
}
