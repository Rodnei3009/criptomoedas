import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoxbitProvider } from '../../providers/foxbit/foxbit';

@IonicPage()
@Component({
  selector: 'page-foxbit',
  templateUrl: 'foxbit.html',
})
export class FoxbitPage {

  foxReturn: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fox: FoxbitProvider) {
    this.getFoxbit();
  }

  getFoxbit() {
    this.fox.getFox()
    .then(data => {
      this.foxReturn = data;
      console.log(this.foxReturn);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoxbitPage');
  }

}
