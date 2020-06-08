import {Component, OnInit} from '@angular/core';
import {from} from "rxjs";
import {pluck, toArray} from "rxjs/operators";

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  data1;
  data2;

  users = [
    {
      id: 1,
      name: 'Umang',
      job: {
        title: 'fullstack',
        ex: '4years'
      }
    },
    {
      id: 2,
      name: 'ram',
      job: {
        title: 'frontend developer',
        ex: '3years'
      }
    },
    {
      id: 3,
      name: 'shaym',
      job: {
        title: 'backend developer',
        ex: '5years'
      }
    },
    {
      id: 4,
      name: 'Tim',
      job: {
        title: 'Java developer',
        ex: '10years'
      }
    },
    {
      id: 5,
      name: 'Jerry',
      job: {
        title: 'Python developer',
        ex: '6years'
      }
    },
  ];


  constructor() {
  }

  ngOnInit() {
    //Example 01
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    ).subscribe((res) => {
      // console.log(res);
      this.data1 = res;
    })

    from(this.users).pipe(
      // map(data => data.name),
      pluck('job', 'title'),
      toArray()
    ).subscribe((res) => {
      this.data2 = res;
    })
  }

}
