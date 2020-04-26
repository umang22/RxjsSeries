import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() {
  }

  addCustomLi(val, containerId) {
    let el = document.createElement("li");
    el.innerHTML = val;

    document.getElementById(containerId).append(el);
  }

}
