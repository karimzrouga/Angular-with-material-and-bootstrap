import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CATALOGUE } from 'src/app/shared/mock-data/catalogue-produit';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class CarouselComponent implements OnInit {
  title = "PRODUITS" ;
  produits = CATALOGUE ;
  onstructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
