import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';

/**
 * Generated class for the Tournament page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tournament',
  templateUrl: 'tournament.html',
})
export class Tournament {
  state: any;
  venue: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.state = navParams.get('state');
    this.getTournamentVenue(this.state.tournament.venue);
  }
  
  getTournamentVenue(venue_id) {
    this.api.getTournamentVenue(venue_id)
      .subscribe(venue => {
        this.state.venue = venue;
      })
  }
  startTournament() {
    this.navCtrl.push('Rules', {
      state: this.state
    })
  }
  goBack() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
  }
}
