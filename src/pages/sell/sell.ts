import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
    selector: "page-sell",
    templateUrl: "sell.html"
})

export class Sell {

public path;


public openCamera():void{

    let option = {
      sourceType:Camera.PictureSourceType.CAMERA,
      destinationType:Camera.DestinationType.NATIVE_URI,
      correctOrientation:true,
      saveToPhotoAlbum:true
    };

    Camera.getPicture(option).then((path) => {
      this.path = path;

    });
     }



    constructor(public navCtrl: NavController) {


    }
}
