import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Course page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class Course {
  state: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.state = navParams.get('state');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Course');
  }

}
