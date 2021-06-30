import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { personFill, personPlusFill, peopleFill, checkCircleFill, envelopeFill, link } from 'ngx-bootstrap-icons';

export const ICONS = {
  personFill,
  personPlusFill,
  peopleFill,
  checkCircleFill,
  envelopeFill,
  link
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
