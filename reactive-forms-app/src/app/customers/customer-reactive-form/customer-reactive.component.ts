import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { Customer } from '../customer';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const email = c.get('email');
  const confirmationEmail = c.get('confirmEmail');
  if (email.pristine || confirmationEmail.pristine || (email.value === confirmationEmail.value)) {
    return null;
  }
  return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value != null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
      return { range: true };
    }
    return null;
  };
}


@Component({
  selector: 'app-reactive-customer',
  templateUrl: './customer-reactive.component.html',
  styleUrls: ['./customer-reactive.component.sass']
})
export class CustomerReactiveComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();
  emailValidationMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // -- Creating form group using FromGroup
    /* this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    }); */

    // Creating FormGroup using FormBuilder
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required]
      }, { validators: emailMatcher }),
      phone: '',
      notification: 'email',
      rating: ['', ratingRange(1, 5)],
      sendCatalog: true,
      addresses: this.fb.array([this.buildAddress()])
    });
    // Watching for FormControl and FormGroup changes using valueChanges
    this.customerForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));
    // this.customerForm.valueChanges.subscribe(value => console.log('CustomerForm value changed ::: ', JSON.stringify(value)));

    // Displaying error messages using valueChanges
    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe({
      next: (value: string) => {
        this.setEmailErroMessage(emailControl);
       },
      error: (err: any) => console.log('Error : ', err),
      complete: () => console.log('Completed!!')
    });
  }

  get addresses(): FormArray {
    return this.customerForm.get('addresses') as FormArray;
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  setEmailErroMessage(c: AbstractControl): void {
    this.emailValidationMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailValidationMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
    }
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Harish',
      email: 'hgurram@gmail.com',
      sendCatalog: true
    });
  }

  save(): void {
    console.log(this.customerForm);
    console.log(`Saved ${JSON.stringify(this.customerForm.value)}`);
  }
}
