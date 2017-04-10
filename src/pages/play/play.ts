import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';

/**
 * Generated class for the Play page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class Play {
  tournaments: any[];
  courses: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.getTournaments()
  }

  goBack() {
    this.navCtrl.push('Home')
  }
  getCourses() {
    this.api.getCourses()
      .subscribe(courses => {
        this.getCourses = courses;
      })
  }
  getTournaments() {
    this.api.getTournaments()
      .subscribe(tournaments => {
        this.tournaments = tournaments;
        console.log('tourneys', tournaments);
      })
  }
  goToTournament(tournament) {
    this.navCtrl.push('Tournament', {
      tournament: tournament
    })
  }
  ionViewDidLoad() {

  }

}
