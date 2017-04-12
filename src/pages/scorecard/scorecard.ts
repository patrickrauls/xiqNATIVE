import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';

/**
 * Generated class for the Scorecard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scorecard',
  templateUrl: 'scorecard.html',
})
export class Scorecard {
  state: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.state = navParams.get('state');
  }
  refreshScores() {
    for (let i = 0; i < 60; i++) {
      setTimeout(()=>{
        this.getTournament
      }, 5000)
    }
  }
  getTournament(){
    this.api.getTournament(this.state.tournament._id)
    .subscribe(tournament => {
      this.state.tournament = tournament;
    })
  }
  goBack() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    this.refreshScores()
    console.log('ionViewDidLoad Scorecard');
  }

}
