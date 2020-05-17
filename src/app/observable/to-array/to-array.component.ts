import {Component, OnInit} from '@angular/core';
import {from, interval, of, Subscription} from "rxjs";
import {take, toArray} from "rxjs/operators";

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  sourceSub: Subscription;
  users = [
    {name: 'Umang', skill: 'Anuglar'},
    {name: 'Umang2', skill: 'Anuglar2'},
    {name: 'Umang3', skill: 'Anuglar3'},
    {name: 'Umang4', skill: 'Anuglar4'}
  ];

  constructor() {
  }

  ngOnInit() {

    // Example -- 01
    const source1 = interval(1000);
    this.sourceSub = source1.pipe(
      take(5), toArray())
      .subscribe(res => {
        // console.log(res);
        /*if (res >= 8) {
          this.sourceSub.unsubscribe();
        }*/
      });

    //  Example - 02
    const source2 = from(this.users);

    source2.pipe(
      toArray()
    ).subscribe(res => {
      // console.log(res);
    })


    const source3 = of('Umang', 'Rastogi', 'test');
    source3.pipe(toArray()).subscribe(res => {
      console.log(res)
    })
  }

}
