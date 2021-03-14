import { Injectable } from '@angular/core';
import { CATALOGUE } from '../shared/mock-data/catalogue-produit';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Produit[] {
    return CATALOGUE;
    }
    
  constructor() { }
}
