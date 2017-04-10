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
  tournament: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.tournament = navParams.get('tournament');
    this.getTournamentVenue(this.tournament.venue);
    console.log('tournament', this.tournament);
  }
  getTournamentVenue(venue_id) {
    this.api.getTournamentVenue(venue_id)
      .subscribe(venue => {
        this.tournament.venue = venue;
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tournament');
  }
}
