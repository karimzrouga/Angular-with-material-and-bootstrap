import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IgxToggleDirective } from 'igniteui-angular';
import { CATALOGUE } from '../shared/mock-data/catalogue-produit';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  produits = CATALOGUE ;
 
  constructor() { }
  usernameControl = new FormControl('');
  ipasswordControl = new FormControl('');
  iemailControl = new FormControl('');
  firstnameControl = new FormControl('');
lastnameControl = new FormControl('');
   uemailControl = new FormControl('');
   upasswordControl = new FormControl('');
   acceptTerms= new FormControl('');
   title= new FormControl('');
   

   isShow = true;
 
   toggleDisplay() {
     this.isShow = !this.isShow;
   }


   

  ngOnInit(): void {
  
 
  }
 
  @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggleContent() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }


}
