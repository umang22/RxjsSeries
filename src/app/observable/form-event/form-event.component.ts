import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {DesignUtilityService} from "../../service/design-utility.service";

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn', {static: true}) addBtn: ElementRef;

  constructor(private dsService: DesignUtilityService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(
      res => {
        console.log("this.addBtn.nativeElement", this.addBtn);
        let countVal = 'Video' + count++;
        this.dsService.addCustomLi(countVal, 'elContainer');
        this.dsService.addCustomLi(countVal, 'elContainer1');
      }
    )
  }


}
