import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IgxToggleDirective } from 'igniteui-angular';
import { MustMatch } from 'src/app/services/login.alert';
import { loginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
 
})
export class SinginComponent implements OnInit {

singinForm: FormGroup;
    in = false;
title1='LREADY REGISTERED?';
    constructor(private formBuilder: FormBuilder , public sendlogin:loginService) { }

    ngOnInit() {
        this.singinForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        }, {
            validator: MustMatch('username', 'password')
        });
    }
    loginin(): void {
      alert(JSON.stringify(this.singinForm.value));
      }
 
    get f() { return this.singinForm.controls; }

    singin() {
        this.in = true;
       

        
        if (this.singinForm.invalid) {
            return;
        }

       
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.singinForm.value, null, 4));
    }
    
    onReset() {
        this.in = false;
        this.singinForm.reset();
    }
  getname(val) {
console.warn(val)
this.title1= 'welcome '+val       }
     
     getdata() {
  
    this.sendlogin.setdata(this.title1);
      
    }
}
  



