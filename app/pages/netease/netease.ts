import {Component} from "@angular/core";
import {NavController, ActionSheet, Modal, ViewController} from "ionic-angular/index";
/**
 * Created by yaoshining on 16/7/26.
 */
@Component({
  templateUrl: 'build/pages/netease/netease.html'
})
export class NeteasePage {

  constructor(private nav: NavController) {

  }

  openPage() {
    this.nav.push(MusicPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
}

@Component({
  templateUrl: 'build/pages/netease/music.html'
})
export class MusicPage {

  constructor(private nav: NavController) {

  }

  openSheet() {
    this.nav.push(SheetPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}

let audio = document.createElement('audio');

@Component({
  templateUrl: 'build/pages/netease/sheet.html'
})
export class SheetPage {

  constructor(private nav: NavController) {

  }

  openActionSheet() {
    let actionSheet = ActionSheet.create({
      title: '选择操作',
      buttons: [
        {
          text: '立即播放',
          handler: () => {
            audio.src = 'http://www.yaoshining.com/file/musicyao?key=Isaac%20Shepard-Felicity.mp3';
            audio.play();
            let modal = Modal.create(PlayerPage);
            this.nav.present(modal);
          }
        },
        {
          text: '添加至下一首'
        },
        {
          text: '添加至队列末'
        },
        {
          text: '替换队列'
        },
        {
          text: '更多…'
        }
      ]
    });

    this.nav.present(actionSheet);
  }
}

@Component({
  templateUrl: 'build/pages/netease/player.html'
})
export class PlayerPage {

  constructor(private viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
