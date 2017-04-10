import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Course } from './course';

@NgModule({
  declarations: [
    Course,
  ],
  imports: [
    IonicPageModule.forChild(Course),
  ],
  exports: [
    Course
  ]
})
export class CourseModule {}
