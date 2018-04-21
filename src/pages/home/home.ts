import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BinanceServiceProvider } from '../../providers/binance-service/binance-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public binanceAPI: BinanceServiceProvider) {
    this.getUsers();
  }

  getUsers() {
    this.binanceAPI.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
