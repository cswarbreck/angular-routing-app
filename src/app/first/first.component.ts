import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  // public means the html can access it
  // private means it's not needed in the front end.


  // Explicit type decalres the TYPE without a value
  // public name: String;

  // This is a type of 'any'
  // public name;

  // This is Implicit decalres name as an empty string.
  public name = '';
  public id;

  constructor(
    // route: has a type of 'ActivatedRoute'
    // Types are not limited to primitive data types
    // ActivatedRoutes is an INTERFACE which has defined variables and methods in it

    private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    //.subscribe is 'listening' to this.route.queryParams using RxJS
    // This is an improvement on promises that only fire once
    this.route.queryParams.subscribe(params => {
      this.name = params['item1'];
    })

  }

}
