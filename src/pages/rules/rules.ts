import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Rules page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class Rules {
  tournament: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament = navParams.get('tournament');
  }
  goBack() {
    this.navCtrl.pop();
  }
  teeOff(tournament) {
    this.navCtrl.push('Holes', {
      tournament: tournament
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Rules');
  }

}
