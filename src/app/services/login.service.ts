import { Injectable } from '@angular/core';
import { Client } from '../shared/models/client';



@Injectable({
  providedIn: 'root'
})
export class loginService {
  ldata='';
   getdata() : string {
   
    return this.ldata;
}
  public setdata( data :string) :void {
this.ldata=data;
  }
  change ( ) {
    //
  }
    
  constructor() { }
}
