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
  state: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.state = navParams.get('state');
  }
  goBack() {
    this.navCtrl.pop();
  }
  teeOff() {
    this.navCtrl.push('Holes', {
      state: this.state
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Rules');
  }
}
