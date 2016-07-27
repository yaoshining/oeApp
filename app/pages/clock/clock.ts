import {Component} from "@angular/core";
import {NavController} from "ionic-angular/index";
/**
 * Created by yaoshining on 16/7/27.
 */

@Component({
  templateUrl: 'build/pages/clock/clock.html'
})
export class ClockPage {

  constructor(private nav: NavController) {

  }

  newClock() {
    this.nav.rootNav.push(NewClockPage);
  }
}

@Component({
  templateUrl: 'build/pages/clock/new.html'
})
export class NewClockPage {

}
