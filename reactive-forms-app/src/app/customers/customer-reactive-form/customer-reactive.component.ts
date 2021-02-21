import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Customer } from '../customer';

@Component({
  selector: 'app-reactive-customer',
  templateUrl: './customer-reactive.component.html',
  styleUrls: ['./customer-reactive.component.sass']
})
export class CustomerReactiveComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      
    });
  }
}
