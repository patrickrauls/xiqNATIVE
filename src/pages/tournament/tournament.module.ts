import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tournament } from './tournament';

@NgModule({
  declarations: [
    Tournament,
  ],
  imports: [
    IonicPageModule.forChild(Tournament),
  ],
  exports: [
    Tournament
  ]
})
export class TournamentModule {}
