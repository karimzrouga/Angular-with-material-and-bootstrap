import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
aboutForm: FormGroup;


constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
    this.aboutForm = this.formBuilder.group({
        name: ['',Validators.required],
        num: [''],
        email: ['',Validators.required],
        text: ['', [Validators.required, Validators.minLength(8)]],
    }, {
  
    });
}
mesg(): void {
  alert(JSON.stringify(this.aboutForm.value));
  }



}
