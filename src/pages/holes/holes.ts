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
  socket: any;
  tournament: any;
  holes: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.tournament = navParams.get('tournament');
    this.tournament.socket = io('http://api.xiqgolf.com');
    console.log(this.tournament)
  }
  goToHole(hole) {
    this.navCtrl.push('Hole', {
      hole: hole,
      tournament: this.tournament
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Holes');
  }
}
