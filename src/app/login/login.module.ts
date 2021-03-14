import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { IgxToggleModule } from 'igniteui-angular';

@NgModule({
  declarations: [ LoginComponent, SinginComponent, SingupComponent],
  imports: [IgxToggleModule ,ReactiveFormsModule,
    
    CommonModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent, SinginComponent, SingupComponent]
})
export class LoginModule { }
