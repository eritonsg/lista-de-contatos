import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { personFill, peopleFill, checkCircleFill } from 'ngx-bootstrap-icons';

export const ICONS = {
  personFill,
  peopleFill,
  checkCircleFill
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(ICONS)
  ],
  exports: [
    NgxBootstrapIconsModule
  ]
})
export class IconsModule { }
