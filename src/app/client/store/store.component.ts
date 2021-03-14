import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATALOGUE } from 'src/app/shared/mock-data/catalogue-produit';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  produits = CATALOGUE ;

tot:number =0;

addplus(p :Produit) : void{
  this.tot +=p.prix;

 
  
}
addmoins(p :Produit) : void{
if (this.tot>0)
{
  this.tot =this.tot -p.prix;
  
 
} 
else
{
  this.tot=0;
}
}


 
  constructor(private _router: Router) { }

  navigateToFirst() {
    this._router.navigate(['/client/home'])
  }
  navigateToSecond() {
    this._router.navigateByUrl('/client/store')
  }

  ngOnInit(): void {
  
  }
  
  
 
     
  }
 

