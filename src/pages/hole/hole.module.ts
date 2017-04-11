import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hole } from './hole';

@NgModule({
  declarations: [
    Hole,
  ],
  imports: [
    IonicPageModule.forChild(Hole),
  ],
  exports: [
    Hole
  ]
})
export class HoleModule {}
