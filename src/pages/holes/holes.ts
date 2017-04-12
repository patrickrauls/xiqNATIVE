import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';
import * as io from 'socket.io-client';

/**
 * Generated class for the Holes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-holes',
  templateUrl: 'holes.html',
})
export class Holes {
  state: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.state = navParams.get('state');
    this.state.tournament.socket = io('http://api.xiqgolf.com');
  }
  goToHole(hole) {
    this.navCtrl.push('Hole', {
      state: this.state,
      hole: hole
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Holes');
  }
}
