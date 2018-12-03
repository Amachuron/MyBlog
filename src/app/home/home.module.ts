import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule
  ],

  exports: [
    SectionComponent
  ]

})
export class HomeModule { }
