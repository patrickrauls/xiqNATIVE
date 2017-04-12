import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the Hole page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hole',
  templateUrl: 'hole.html',
})
export class Hole {
  state: any;
  hole: any;
  distance: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: Api,
    private geolocation: Geolocation
  ) {
    this.state = navParams.get('state');
    this.hole = navParams.get('hole');
    console.log('tourney', this.state.tournament)
    this.getPlayers(this.state.tournament.players)
  }
  getPlayers(ids) {
    this.api.getPlayers(ids)
      .subscribe(players => {
        this.state.players = players;
      })
  }
  goToScore() {
    this.navCtrl.push('Score', {
      hole: this.hole,
      state: this.state
    })
  }
  getDistance(target_string) {
    let target_array: string[] = target_string.split(', ');
    let target: any = {
      lat: target_array[0],
      lon: target_array[1]
    }
    this.geolocation.getCurrentPosition()
      .then(gps => {
        let origin: any = {
          lat: gps.coords.latitude,
          lon: gps.coords.longitude
        }
        this.api.getDistance(origin, target)
          .subscribe(distance => {
            this.distance = distance;
            console.log(distance);
          })
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Hole');
  }

}
