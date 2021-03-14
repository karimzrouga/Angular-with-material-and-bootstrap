import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gestprod',
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css']
})
export class GestprodComponent implements OnInit {

  constructor() { }
  nameControl = new FormControl('');
  prixControl = new FormControl('');
  descriptionControl = new FormControl('');
 imageControl = new FormControl('');
 categControl = new FormControl('');
 
  ngOnInit(): void {
  }

}
