import {Component, OnInit} from '@angular/core';
import {from} from "rxjs";
import {filter, toArray} from "rxjs/operators";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  dataArry = [
    {"id": 1, "name": "Ahmed", "gender": "Male"}, {"id": 2, "name": "Driscoll", "gender": "Male"}, {
      "id": 3,
      "name": "Abraham",
      "gender": "Female"
    }, {"id": 4, "name": "Griffith", "gender": "Male"}, {"id": 5, "name": "Harrison", "gender": "Female"}, {
      "id": 6,
      "name": "Bradley",
      "gender": "Male"
    }, {"id": 7, "name": "Nigel", "gender": "Female"}, {"id": 8, "name": "Axel", "gender": "Female"}, {
      "id": 9,
      "name": "Ivan",
      "gender": "Female"
    }, {"id": 10, "name": "Logan", "gender": "Male"}, {"id": 11, "name": "Hamilton", "gender": "Male"}];

  data1;
  data2;
  data3;

  constructor() {
  }

  ngOnInit() {

    const source = from(this.dataArry);

    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    ).subscribe((res) => this.data1 = res);

    source.pipe(
      filter(member => member.gender == 'Male'),
      toArray()
    ).subscribe((res) => this.data2 = res);


    source.pipe(
      filter(member => member.id <= 6),
      toArray()
    ).subscribe((res) => this.data3 = res);


  }

  //Example 02
}
