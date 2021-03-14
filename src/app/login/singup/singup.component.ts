import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/services/login.alert';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  
})
export class SingupComponent implements OnInit {

  
    registerForm: FormGroup;
    submitted = false;
title='CREATE YOUR ACCOUNT'

    getname(val) {
        console.warn(val)
        this.title= 'Thank you for registering '+val       }
             




    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

    
        if (this.registerForm.invalid) {
            return;
        }

       
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    loginup(): void {
        alert(JSON.stringify(this.registerForm.value));
        }
}
  

