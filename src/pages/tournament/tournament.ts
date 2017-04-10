import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament = navParams.get('tournament');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tournament');
  }

}
