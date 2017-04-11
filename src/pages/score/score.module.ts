import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Score } from './score';

@NgModule({
  declarations: [
    Score,
  ],
  imports: [
    IonicPageModule.forChild(Score),
  ],
  exports: [
    Score
  ]
})
export class ScoreModule {}
