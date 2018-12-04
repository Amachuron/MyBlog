import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import {HeaderFooterModule} from "../header-footer/header-footer.module";

@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule, HeaderFooterModule
  ],

  exports: [
    SectionComponent
  ]

})
export class HomeModule {
}
