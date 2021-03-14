import { Component, Input } from '@angular/core';
import { loginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public name='login' ;
  
    constructor(public sendlogin:loginService ) { 
        
      } 
      myval="x";
      getval(val) {
console.warn(val)
this.myval=val       }
       
       getdata() {
    
      this.name=this.sendlogin.getdata();
        
      }
      
    
}
