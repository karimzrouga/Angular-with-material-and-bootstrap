import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ERRORModule } from './error/error.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GestprodModuleModule } from './admin/gestprod/gestprod-module.module';
import { LoginModule } from './login/login.module';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [ 
    AppComponent  
  ],
 
  
   
  imports: [Ng2SearchPipeModule, BootstrapIconsModule.pick(allIcons),
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    AdminModule,
    NgbModule,
    ERRORModule,
    BrowserAnimationsModule,
    GestprodModuleModule,
    LoginModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  exports: [],

})
export class AppModule { }
