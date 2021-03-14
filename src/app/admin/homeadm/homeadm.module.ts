import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeadmRoutingModule } from './homeadm-routing.module';
import { HomeadmComponent } from './homeadm.component';


@NgModule({
  declarations: [HomeadmComponent],
  imports: [
    CommonModule,
    HomeadmRoutingModule
  ],
  exports: [HomeadmComponent]
})
export class HomeadmModule { }
