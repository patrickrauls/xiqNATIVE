import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Holes } from './holes';

@NgModule({
  declarations: [
    Holes,
  ],
  imports: [
    IonicPageModule.forChild(Holes),
  ],
  exports: [
    Holes
  ]
})
export class HolesModule {}
