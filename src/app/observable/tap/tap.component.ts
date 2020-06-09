import {Component, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, tap} from "rxjs/operators";
import {DesignUtilityService} from "../../service/design-utility.service";

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  obsSub: Subscription;
  obsSub2: Subscription;
  myColor: String;

  constructor(private ds: DesignUtilityService) {
  }

  ngOnInit() {
    const source = interval(1000);
//example 1
    const arr = ['umang', 'anshu', 'kushal', 'kamal', 'aditya'];
    this.obsSub = source.pipe(
      tap(res => {
        // console.log('before map ', res)
        if (res > 4) {
          this.obsSub.unsubscribe();
        }
      }),
      map(res => arr[res]),
      tap((res) =>
        console.log('after map ', res)
      )
    ).subscribe((res) => {
      this.ds.addCustomLi(res, 'elContainer');
    });

    //Example 2
    const color = ['red', 'black', 'brown', 'green', 'blue'];
    this.obsSub2 = source.pipe(
      tap(res => {
        this.myColor = color[res];
        console.log('before map ', res)
        if (res > 4) {
          this.obsSub2.unsubscribe();
        }
      }),
      map(res => color[res]),
    ).subscribe((res) => {
      this.ds.addCustomLi(res, 'elContainer2');
    });


  }

}
