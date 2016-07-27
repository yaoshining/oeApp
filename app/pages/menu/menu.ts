/**
 * Created by yaoshining on 16/7/24.
 */
import {Component} from "@angular/core";
import {HomePage} from '../home/home';
import {PlaylistPage} from '../playlist/playlist';
import {LibraryPage} from '../library/library';
import {LocalPage} from '../local/local';
import {NeteasePage} from '../netease/netease';
import {MusicServicesPage} from '../music-services/music-services';
import {ClockPage} from '../clock/clock';
import {HelpPage} from '../help/help';
import {SettingsPage} from '../settings/settings';
import {MenuController, NavController} from "ionic-angular/index";
@Component({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MenuPage {
  private rootPage: any;
  private menus: any[];
  constructor(private menu: MenuController, private nav: NavController) {
    this.rootPage = HomePage;

    this.menus = [{
      title: 'Sonos 收藏夹',
      imageUrl: 'img/fav.png',
      page: HomePage
    }, {
      title: 'Sonos 播放列表',
      imageUrl: 'img/playlist.png',
      page: PlaylistPage
    }, {
      title: '音乐库',
      imageUrl: 'img/library.png',
      page: LibraryPage
    }, {
      title: '此移动设备上',
      imageUrl: 'img/device.png',
      page: LocalPage
    }, {
      title: 'TuneIn 电台',
      imageUrl: 'img/tunein.png'
    }, {
      title: '豆瓣FM',
      imageUrl: 'img/douban.png'
    }, {
      title: '网易云音乐',
      imageUrl: 'img/wangyi.png',
      page: NeteasePage
    }, {
      title: '添加音乐服务',
      imageUrl: 'img/add_track.png',
      page: MusicServicesPage,
      push: true
    }, {
      title: '闹钟',
      imageUrl: 'img/clock.png',
      page: ClockPage,
      push: true
    }, {
      title: '帮助',
      imageUrl: 'img/help.png',
      page: HelpPage,
      push: true
    }, {
      title: '设置',
      imageUrl: 'img/settings.png',
      page: SettingsPage,
      push: true
    }];
  }

  openPage(menu) {
    if(menu.page) {
      if(menu.push) {
        this.nav.rootNav.push(menu.page)
      } else {
        this.rootPage = menu.page;
      }
    }
    this.menu.close();
  }
}
