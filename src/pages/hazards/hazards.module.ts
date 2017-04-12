import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hazards } from './hazards';

@NgModule({
  declarations: [
    Hazards,
  ],
  imports: [
    IonicPageModule.forChild(Hazards),
  ],
  exports: [
    Hazards
  ]
})
export class HazardsModule {}
