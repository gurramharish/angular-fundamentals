# Reactive Forms in Angular

1. This is sample app to hold examples for template and reactive forms implementation.

1. Inorder to check the template driven form in the application use `<app-customer></app-customer>` component in `app.component.html`.

1. If you want to verify reactive forms approach for the same customer form use `<app-reactive-customer></app-reactive-customer>` component in `app.component.html`.

## Introduction

1. We can  generate two types of forms in angular:

    * Template Driven Forms
    * Reactive Forms

1. In template driven approach we build forms using html and data binding.

1. We build reactive forms using model driven approach by defining the form model and validation in the component code(ts).

### Angular Forms

1. In template driven forms as name implies, we need to implement the form and validation logic in template. Easy to use, similar to angular JS, two-way data binding, automatically tracks form and input element state.

1. In reactive forms data and validation is managed in component code(ts). More flexible ->
more complex scenarios, Immutable data model, Easier to perform an action on a value change, Reactive transformations -> DebounceTime or DistinctUntilChanged, Easily add input elements dynamically, Easier unit testing.

## Template Driven vs Reactive Forms

1. FormGroup and FromControl buliding blocks of forms.

1. Angular has predefined form and input elements states.

    ### Value Changed States

    1. If the value of the field is unchange its state is `pristine`. If all the form elements state is `pristine`, then then form state is pristine.

    1. If the value is changed the field state is `dirty`, so the form state also becomes `dirty`.

    ### Validity

    1. A state and array tracks the validity of the form: `valid` and `errors`.

    1. The input element state is valid if it passes all defined validation rules.

    1. Validation errors are added to an errors collection. The key for each array element is the name of the  validation rule associated with the error.

    ### Visited

    1. A form element state becomes `touched` if the user focused and left the element.

    1. An input element state is set to `untouched` if the user has not set focus and left the input element.

    1. If all the form elements are untocuhed, then the form state itself is untouched.

### Form Building Blocks

1. `FormControl` tracks the value and state of the individual input elements.

1. `FormGroup` tracks the value and state of a group of FormControls.

1. A form itself is managed as a `FormGroup`, but any group of elements in a form comprise a `FormGroup`.

1. For example we could gorup the input elements for a mailing address block.

1. FormGroups can neseted within another FormGroups.

1. Instances of this classes define the form model.

1. Form Model is the data structure that represents the HTML form.

1. Form Model is the structure which holds `FormControls` for all the input elements in the `FormGroup`. It will hold the state of the form like `dirty`, `valid`, `pristine`. It has a `value` property which tracks the changes to the form controls.

1. Form model can hold nested FormGroups.

1. Bootstrap `is-invalid` class also changes the `invalid-feedback` display: none to display : block.

1. In Template direven approach we need to import `FormsModule`.

1. For template driven from we will use this  directives `ngForm`, `ngModel`, `ngSubmit` to handle form state and behaviour.

1. As soon as you import the FormsModule, this `ngForm` directive becomes active by default on all <form> tags. You don't need to add a special selector.

1. If you have very simple forms you can implement them using template driven approach.

1. To handle complex scenarios like dynamically add input elements, watch what the user types, wait validations until typing stops, different validations for different situations, immutable data.

1. The above mentioned complex scenarios can be handled easily with reactive forms.

## Reactive Form

1. Every Form Model requires at least one `Root FormGroup`.

1. A Form Model has atleast one `FromControl`.

1. We will have some input elements which is not needed to track by my our Form model need not to be a FormControl. Ex: Checkbox to hide or display some fields.

1. Controls collection in a Form Model can have `nested FormGroups` to group set of input elements.

1. Controls can have `FormArrays` to handle groups for FromControls or FromGroups as an array.

1. We first need to create a `FromGroup` which can have one or more `FormControls`.

    ```typescript
    import {FormGroup, FormControl} from '@angular/forms';

    @Component({
        selector: 'app-customer',
        templateUrl: './customer.component.html',
        styleUrls: ['./customer.component.sass']
    })
    export class CustomerComponent implements OnInit {
        customerForm: FormGroup
        customer: Customer = new Customer();

        constructor() {}

        ngOnInit() {
            this.customerForm = new FormGroup({
                firstName: new FormControl(),
                lastName: new FormControl(),
                email: new FormControl(),
                sendCatalog: new FromControl(true) // Initial value true for sendCatalog FormControl
            });
        }
    }
    ```

1. To use reactive forms and directives, we need to import `ReactiveFormsModule` from `@angular/forms`.

1. We bind the form to FormGroup and each input element to its FormControl using Reactive Forms Directives.

    * formGroup
    * formControl
    * formControlName
    * formGroupName
    * formArrayName

1. Bind form with `formGroup`and each input element is binded with `formControlName`with the `FormControl` instances defined in the form model.

1. Accessing the Form Model properties in component.

    ```typescript
    customerForm.controls.firstName.valid

    customerForm.get('firstName').valid
    ```

1. To change input values from component code(ts) in reactive forms is not possible using `[(ngModel)]`.

1. To set intial values or update values after form initialization we can use `FormGroups` `setValue` and `patchValue` in onInit life hook.

1. Use `setValue` to set all the values of FormControls in a FormGroup. If we set a subset of values using `setValue`, we will get errors while saving the form.

    ```typescript
    populateTestData(): void {
        this.customerForm.setValue({
        firstName: 'Harish',
        lastName: 'Gurram',
        email: 'hgurram@gmail.com',
        sendCatalog: true
        });
    }
    ```

1. To set only subset of the values we can use `patchValue`.

    ```typescript
    populateTestData(): void {
        this.customerForm.patchvalue({
        firstName: 'Harish',
        lastName: 'Gurram',
        sendCatalog: true
        });
    }
    ```

## Simplifying with FormBuilder

1. Creating form using `FormGroup` is not efficient when there is large number of `FormControls`.

1. Easier way to create Form Model is using `FormBuilder`.

1. FormBuilder creates a form model from a configuration. It shortens boilerplate code.

1. FormBuilder is provided as service.

1. FromBuilder creates a form model from a configuration, we can think FormBuilder as a factory that creates FormGroups and FormControls for us.

    Example:

    ```typescript
    // Approach 1
    // Creating form model using FormBuilder service, setting default values
    this.customerForm = this.fb.group({
        firstName: '',
        lastName: ''
    })

    // Approach 2
    // Creating form model using FormBuilder service, with default values and disabling form fields
    this.customerForm = this.fb.group({
        firstName: {value: 'Harish', disabled: true},
        lastName: {value: 'Gurram', disabled: false}
    })

    // Approach 3
    // We can create form model using FormBuilder using arrays for FormControl configuration
    this.customerForm = this.fb.group({
        firstName: [''], // We can provide 3 values to this array, 1st is defalut value and the remaining 2 are validation rules
        sendCatalog: [{value: true, disabled: false}]
    })
    ```

## Validation in Reactive Forms

1. We can define FormControls in a FormGroup in 3 ways as mentioned above, inoredr to have validations in component code(ts) instead of component html we need to use Approach 3.

1. Setting Built-in validation rules

    ```typescript
    this.customerForm = this.fb.group({
        firstName: ['', Validators.required],
        sendCatalog: true
    })

    this.customerForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        sendCatalog: true
    })
    ```

1. We can pass 3 arguments in the above examples in the array, 3rd argument which is not mentioned in the above examples is a `async` validator, which will be invoked only after all the Validators mentioned in second arguments are valid.

### Adjusting validation rules at runtime

1. We can change the validation of a FormControl at runtime using FormControls `setValidators` method.

1. We can clear the validations using `clearValidators` method.

1. On changing the validators at runtime will not update the validitiy of the FormControls, we need to manually call `updateValueAndValidity` method to rerun the updated validations on the current values of a FormControl.

    Example:

    ```typescript
    myControl.setValidators(Validators.required);

    myControl.setValidators([Validotrs.required, Validators.maxLength(30)]);

    // For Cleraring all the Validations
    myControl.clearValidators();

    // After updating the validations we need to invoke updateValueAndValidity to immediatly run the validations on the current value of the FormControl
    myControl.updateValueAndValidity();
    ```

### Custom Validators

1. Angular provides basic validations like required, min, max and pattern. To have complex validations we need to write our own custom validators.

1. Validators can be defined in the component code if they are used only once, if you want to reuse them we can define them in common place and import them into the components.

    Example:

    ```typescript
    function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
        if (c.value != null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
            return { range: true}
        }
        return null;
    }
    ```

1. Passing parameters to validators, we need to write a factory function like bellow:

    ```typescript
    function ratingRange(min: number, max: number): ValidatorFn {
        return (c: AbstractControl) : { [key: string]: boolean } | null => {
            if(c.value !== null && (isNan(c.value) || c.value < min || c.value > max)) {
                return { range: true }
            }
            return null;
        }
    }
    ```

### Cross-field Validation: Nested FormGroup

Example:

```typescript
 emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required]
    }, {validators: emailMatcher})
```

## Reacting to Changes

1. The cool thing about reactive forms is we can watch for the changes happening to a FormControl or a FormGroup and react to those changes in real time.

1. Both FormControl and FormGroup has `valueChanges` property which emits a event every time the value of the control changes, either in the user intreface or programatically.

1. Watching and reacting FormControl and FormGroup value changes syntax:

```typescript
// Watching FormContorl
const phoneControl = this.customerForm.get('phone');
phoneControl.valueChanges.subscribe(value => console.log(value)); // We can call other functions in subscirbe

// Watching FormGroup
this.customerForm.valueChanges.subscritbe(value => console.log(JSON.stringify(value)));
```

### Dispalying validation messages using valueChanges

1. Instead of having big validation checks in html like bellow example, we can watch for valueChanges and display validation messages in efficient way.

```html
<input  class="form-control"
                    id="emailId"
                    type="email"
                    placeholder="Email (required)"
                    formControlName="email"
                    [ngClass]="{'is-invalid': customerForm.get('emailGroup').errors ||
                                              ((customerForm.get('emailGroup.email').touched
                                              || customerForm.get('emailGroup.email').dirty)
                                              && !customerForm.get('emailGroup.email').valid) }" />
```

1. Will change the above code using bellow steps.

    * Create a errorMessage variable for the FormControl
    * Get the error messages as a JSON object from backend or some constants.
    * Write a common method take the FormControl as input and check for touched, dirty and set the errorMessage dynamically.

    Example:

    ```typescript

    emailErrorMessage: string
    private validationMessages = {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
    }

    const emailControl = this.customerForm.get('email');
    emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));

    setMessage(c: AbstractControl): void {
        this.emailErrorMessage = '';
        if((c.touched || c.dirty) && c.errors) {
            this.emailErrorMessage = Object.keys(c.errors).map(
                key => this.validationMessages[key].join(' ');
            )
        }
    }
    ```

1. But there is drawback with valueChanges will not work on focus and focus out, so we wont see any errors messages if the FormControl is touched and focused out.

### Reactive Transformations using RxJs operators

1. Validation messages are displayed immediately after user starts typing, we can use `debounceTime` operator to ignore the events until a specific time has passed without another event.

1. debounceTime(1000) waits for 1000 milliseconds of no events before emitting another event.

1. `throttleTime` emits a value, then ignores subsequent values for a specific amount of time.

1. `distinctUntilChanged` suppress duplicate consecutive items for(Ctrl and Shift keys changed).

    ```typesciprt
    emailControl.valueChanges.pipe(
        debounceTiime(1000)
    ).subscribe(value => this.setEmailErroMessage(emailControl));
    ```
