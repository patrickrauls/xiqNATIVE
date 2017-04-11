import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Scorecard } from './scorecard';

@NgModule({
  declarations: [
    Scorecard,
  ],
  imports: [
    IonicPageModule.forChild(Scorecard),
  ],
  exports: [
    Scorecard
  ]
})
export class ScorecardModule {}
