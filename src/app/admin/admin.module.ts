import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeadmModule } from './homeadm/homeadm.module';
import { AdminComponent } from './admin.component';
import { GestprodModuleRoutingModule } from './gestprod/gestprod-module-routing.module';







@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeadmModule,
    GestprodModuleRoutingModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
