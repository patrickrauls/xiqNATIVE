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
    this.getTournaments();
    this.getCourses();
  }

  goBack() {
    this.navCtrl.push('Home')
  }
  getCourses() {
    this.api.getCourses()
      .subscribe(courses => {
        this.courses = courses;
      })
  }
  goToCourse(course) {
    this.navCtrl.push('Course', {
      course: course
    })
  }
  getTournaments() {
    this.api.getTournaments()
      .subscribe(tournaments => {
        this.tournaments = tournaments;
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
