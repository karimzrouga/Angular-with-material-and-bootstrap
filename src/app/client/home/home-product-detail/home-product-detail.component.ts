import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
 export class HomeProductDetailComponent implements OnInit {
 
  constructor(private _router: Router) { }

  navigateToFirst() {
    this._router.navigate(['client/store'])
  }
  
  @Input() prd:Produit;
  ngOnInit(): void {
  }
  

}
