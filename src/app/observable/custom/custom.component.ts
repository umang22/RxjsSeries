import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {DesignUtilityService} from "../../service/design-utility.service";

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus;
  Obssub2: Subscription;
  techStatus2: string;
  nameStatus: string;
  names;

  constructor(private ds: DesignUtilityService) {
  }

  ngOnInit() {
    //  Ex - 01
    const cusObs = new Observable(observer => {
      setTimeout(() => {
        observer.next('Java');
      }, 1000)
      setTimeout(() => {
        observer.next('Spring');
      }, 2000)
      setTimeout(() => {
        observer.next('Jquery');
        // observer.error(new Error('Limit Exceed'));
        observer.complete();
      }, 3000)
      setTimeout(() => {
        observer.next('Angular');
      }, 4000)
      setTimeout(() => {
        observer.next('Typescript');
      }, 5000)
    })
    cusObs.subscribe(res => {
      // console.log(res);
      this.ds.addCustomLi(res, 'elContainer')
    }, (err) => {
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed'
    })
    //  Example - 02

    const Arr2 = ['Umang', 'Kushal', 'Anshu', 'Kamal', 'Test']
    const cusObs2 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[(count)]);
        if (count >= 2) {
          // observer.complete()
          observer.error(new Error('Errrrrror'))
        }
        /*     if (count >= 5) {
               observer.complete();
             }*/
        count++;
      }, 1000)
    })

    this.Obssub2 = cusObs2.subscribe(res => {
      // console.log(res);
      this.ds.addCustomLi(res, 'elContainer2')
    }, () => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed'
    });

    //Example 03
    const Arr3 = ['Anshu', 'Kamal', 'Ram', 'Ishu', 'Jax', 'Ronny', 'Umang', 'Kushal']
    const cusObs3 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[(count)]);
        if (count >= 7) {
          observer.complete()
          // observer.error(new Error('Errrrrror'))
        }
        if (count >= 5) {
          observer.error(new Error("danger"));
        }
        count++;
      }, 1000)
    })

    cusObs3.subscribe(res => {
      console.log(res)
      this.names = res;
    }, () => {
      this.nameStatus = 'error';
    }, () => {
      this.nameStatus = 'completed'
    });

  }

  ngOnDestroy(): void {
    this.Obssub2.unsubscribe();
  }

}
