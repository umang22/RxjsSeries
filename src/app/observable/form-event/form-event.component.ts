import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn', {static: true}) addBtn: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(
      res => {
        let countVal = 'Video' + count++;
        this.print(countVal, 'elContainer');
        this.print(countVal, 'elContainer1');
      }
    )
  }

  print(val, containerId) {
    let el = document.createElement("li");
    el.innerHTML = val;

    document.getElementById(containerId).append(el);
  }


}
