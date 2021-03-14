import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ERRORRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';


@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    ERRORRoutingModule
  ],
  exports: [ErrorComponent]
})
export class ERRORModule { }
