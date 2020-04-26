import {Component, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {DesignUtilityService} from "../../service/design-utility.service";

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  videoSubscription: Subscription;

  constructor(private dsService: DesignUtilityService) {
  }

  ngOnInit() {
    // const broadcastVideo = interval(1000);
    //time(delay,interval)
    const broadcastVideo = timer(5000, 1000);
    this.videoSubscription = broadcastVideo.subscribe(res => {
      this.obsMsg = "Video " + res;
      this.dsService.addCustomLi(this.obsMsg, 'elContainer')

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })
  }


}
