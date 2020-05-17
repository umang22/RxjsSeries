import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {DesignUtilityService} from "../../service/design-utility.service";

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg;

  constructor(private ds: DesignUtilityService) {
  }

  ngOnInit() {
    //Example OF
    const obs1 = of('Umang', 'Kushal', 'Anshu', 'Kamal');

    obs1.subscribe((res => {
      this.ds.addCustomLi(res, "elContainer1")
    }))

    //Example OF using Object as arguments
    const obs2 = of({a: 'Umang', b: 'Kushal', c: 'Anshu', d: 'Kamal'});

    obs2.subscribe((res => {
      this.obsMsg = res;
      console.log("this.obsMsg", this.obsMsg)
    }))
  }

}
