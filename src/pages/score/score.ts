import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  tournament: any;
  players: any[];
  hole: any;
  stat: any;
  term: string[] = ['double eagle', 'eagle', 'birdie', 'par', 'bogey', 'double bogey', 'triple bogey'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hole = navParams.get('hole');
    this.tournament = navParams.get('tournament');
    this.players = navParams.get('players');
  }
nextHole(hole){
  this.navCtrl.push('Hole', {
    tournament: this.tournament,
    players: this.players,
    hole: this.tournament.venue.holes[hole.id + 1]
  })
}
finish() {
  this.navCtrl.push('Scorecard', {
    tournament: this.tournament
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Score');
  }

}
