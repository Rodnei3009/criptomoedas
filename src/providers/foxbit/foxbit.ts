import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FoxbitProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  //apiUrl = 'https://api.coinmarketcap.com/v1/ticker/bitcoin';

  constructor(public http: HttpClient) {
    console.log('Hello FoxbitProvider Provider');
  }

  getFox() {
    alert('AAA');
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
