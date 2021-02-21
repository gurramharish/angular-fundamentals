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
