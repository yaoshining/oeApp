import {Component} from "@angular/core";
import {NavController} from "ionic-angular/index";
import {MenuPage} from "../menu/menu";
/**
 * Created by yaoshining on 16/7/25.
 */
@Component({
  templateUrl: 'build/pages/init/init.html'
})
export class InitPage {

  constructor(private nav: NavController) {

  }

  nextPage() {
    this.nav.setRoot(MenuPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
