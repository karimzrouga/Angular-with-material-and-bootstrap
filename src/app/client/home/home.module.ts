import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';





@NgModule({
   
  declarations: [HomeComponent, HomeProductDetailComponent, HomeProductsComponent,CarouselComponent],
  imports: [ BootstrapIconsModule.pick(allIcons),BrowserModule , NgbModule, BrowserAnimationsModule, BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,

 CommonModule,
    HomeRoutingModule
  ],
 
  exports: [HomeComponent]
})
export class HomeModule { }
