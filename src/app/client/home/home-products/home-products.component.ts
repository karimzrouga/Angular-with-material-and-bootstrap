import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { Produit } from 'src/app/shared/models/produit';


@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class HomeProductsComponent implements OnInit {
  
  title = "PRODUITS" ;
  produits : Produit[] ;
 selectprod:Produit;

  oncliccard(p :Produit) : void{
    this.selectprod=p;
  }


  constructor(private productService: ProductService,config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
     this.produits = this.productService.getProducts();
    }
    



}
