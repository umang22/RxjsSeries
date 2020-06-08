import {Component, OnInit} from '@angular/core';
import {from, interval, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {DesignUtilityService} from "../../service/design-utility.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //Subscriptions
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  //Message
  msg1;
  msg2;
  msg3;

  constructor(private ds: DesignUtilityService) {
  }

  ngOnInit() {
    const broadCastVideo = interval(1000);

    //Example - 01
    this.subscription1 = broadCastVideo.pipe(
      map(data => 'Vidoe ' + data)
    )
      .subscribe((res) => {
        this.msg1 = res;
      })

    setTimeout(() => {
      this.subscription1.unsubscribe()
    }, 10000)

    //Example 02

    this.subscription2 = broadCastVideo.pipe(
      map(data => data * 2)
    )
      .subscribe((res) => {
        this.msg2 = res;
      })

    setTimeout(() => {
      this.subscription2.unsubscribe()
    }, 10000)


    //Example 03
    const members = from([
      {id: 1, name: 'a1'},
      {id: 2, name: 'a2'},
      {id: 3, name: 'a3'},
      {id: 4, name: 'a4'},
      {id: 5, name: 'a5'},
      {id: 6, name: 'a6'},
      {id: 7, name: 'a7'},
      {id: 8, name: 'a8'},
      {id: 9, name: 'a9'},
      {id: 10, name: 'a10'},
    ])

    members.pipe(map(data => data.name)).subscribe((res) => {
      this.ds.addCustomLi(res, 'elcontainer');
    })
    /*this.subscription3 = broadCastVideo.pipe(
      map(data => data)
    )
      .subscribe((res) => {
        this.msg3 = res;
      })*/

    setTimeout(() => {
      this.subscription3.unsubscribe()
    }, 10000)


  }

}
