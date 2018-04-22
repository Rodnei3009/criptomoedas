import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BinanceServiceProvider {

  ////////////////////////////////////
  //https://www.djamware.com/post/59924f9080aca768e4d2b12e/ionic-3-consuming-rest-api-using-new-angular-43-httpclient
  ////////////////////////////////////

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  //apiUrl = 'https://api.binance.com/api/v3/ticker/price';

  constructor(public http: HttpClient) {
    console.log('Hello BinanceServiceProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
