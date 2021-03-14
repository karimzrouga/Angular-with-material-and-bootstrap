import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  navigateToFirst() {
    this._router.navigate(['/client/home'])
  }
  navigateToSecond() {
    this._router.navigateByUrl('/support')
  }
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
