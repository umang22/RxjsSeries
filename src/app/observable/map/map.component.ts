import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  subscription1: Subscription;

  constructor() {
  }

  ngOnInit() {
    const broadCastVideo = interval(1000);

    this.subscription1 = broadCastVideo.pipe(
      map(data => 'Vidoe ' + data)
    )
      .subscribe((res) => {
        console.log(res);
      })

    setTimeout(() => {
      this.subscription1.unsubscribe()
    }, 10000)

  }

}
