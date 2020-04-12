import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  dell = {
    brand: 'dell',
    harddisk: '2TB',
    color: 'Black'
  };

  hp = {
    brand: 'HP',
    hdd: '1TB',
    color: 'White'
  };

  notAvail = {
    laptop: 'Available',
  };

  constructor() {
  }


  dellAvailable() {
    return false;
  }

  hpAvailable() {
    return true;
  }

  ngOnInit(): void {

    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve(this.hp);
        }, 3000);
      } else {
        return setTimeout(() => {
          reject(this.notAvail);
        });
      }
      // resolve('Promise is resolved');
    });

    buyLaptop.then((response) => {
      console.log('Resolve ==> ', response);
    }).catch(response => {
      console.log('Reject ==> ', response);

    });

  }

}
