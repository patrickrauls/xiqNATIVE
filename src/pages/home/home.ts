import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  state: any;
  login: any = {
    credentials: {
      "id": 0
    }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.getPlayer(this.login.credentials);
  }
  getPlayer(player_cred) {
    this.api.getPlayer(player_cred)
      .subscribe(player => {
        this.state = {
          player: player
        }
      })
  }
  goPlay() {
    this.navCtrl.push('Play', {
      state: this.state
    })
  }
}
