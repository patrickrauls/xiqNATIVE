import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Api } from '../../providers/api';

/**
 * Generated class for the Hazards page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hazards',
  templateUrl: 'hazards.html',
})
export class Hazards {
  hazard: any;
  distance: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, public api: Api) {
    this.hazard = navParams.get('hazard');
    this.getDistance(this.hazard.front || this.hazard.clear);
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
          })
      })
  }
goBack() {
  this.navCtrl.pop()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Hazards');
  }

}
