import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GestprodModuleRoutingModule } from './gestprod-module-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponentComponent } from './ProductAddComponent/product-add-component.component';


@NgModule({
  declarations: [ProductAddComponentComponent, GestprodComponent],
  imports: [ReactiveFormsModule,
    CommonModule,
    GestprodModuleRoutingModule
  ],
  exports: [ProductAddComponentComponent]
})
export class GestprodModuleModule { }
