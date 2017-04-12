import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';

/**
 * Generated class for the Score page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})

export class Score {
  state: any;
  hole: any;
  score: any;
  term: string[] = ['double eagle', 'eagle', 'birdie', 'par', 'bogey', 'double bogey', 'triple bogey'];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.hole = navParams.get('hole');
    this.state = navParams.get('state');
    console.log(this.state.tournament)
  }
postScore(score) {
  console.log(score);
  console.log(this.state.tournament)
  this.state.tournament.players[
    this.state.tournament.players.findIndex(player => player.id === this.state.player.id)
    ].score[this.state.tournament.players[0].score.length - 1][this.hole.id] = parseInt(score);
  this.api.postScore(this.state.tournament)
}
nextHole(hole){
  // this.postScore(this.score.value);
  this.navCtrl.push('Hole', {
    state: this.state,
    hole: this.state.venue.holes[hole.id + 1]
  })
}
finish() {
  this.navCtrl.push('Scorecard', {
    state: this.state
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Score');
  }

}
