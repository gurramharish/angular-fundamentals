# Angular Fundamentals

1. ## Quick start for creating angular app

    1. Install angular-cli first.

    ```bash
    npm install -g @angular/cli
    ```

    1. Create angular project using angular cli

    ```bash
    ng new your-project-name
    ```

    1. If you are willing to use bootstrap along in the project, follow bellow steps

    ```bash
    npm install --save bootstrap
    ```

    After installing bootstrap, open angular.json and add the bellow lines in styles object under build.

    ```json
    "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.sass"
    ],
    ```

## 1. Angular Architecture, Setup, Source Files

1. The typical architure of angular application is made up of these 5 building blocks.

```text
Modules, Components, Directives, Routing, Services
```

### 1. Modules

1. Modules are the building blocks that contains routes, components, services and more. There can be one or more modules in one angular application.

### 2. Components

1. Components contains a template, data and logic, forming part of a DOM tree.

1. Generating components using angular cli, use --dry-run flag to see the files created and modified while creating a new component.

```bash
ng generate component servers

or

ng g c servers
```

1. We can create directive components and class components, we need change the selector in the component to make the component selector works as driective or class.

Directive Component

```javascript
import { Component } from '@angular/core';

@Component({
  selector: '[app-server-directive]', // Selector is inside square brackets [] to use the selector as directive inside html tags Eg: <div app-server-directive></div>
  templateUrl: './server-directive.component.html',
  styleUrls: ['./server-directive.component.sass']
})
export class ServerDirectiveComponent {
}
```

```html
<div app-server-directive></div>
```

Class Component

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server-class', // Selector has '.' in the beginning so it can be used a class name Eg: <p class="app-server-class"></p>
  templateUrl: './server-class.component.html',
  styleUrls: ['./server-class.component.sass']
})
export class ServerClassComponent {}
```

```html
<div class="app-server-class"></div>
```

### 3. Directives

1. Directives attach behaviour, extend or transform a particular element and its childern.

1. Angular has lot of inbuilt directives.

### 4. Services

1. Services are a data layer, logic that is not a component related, such as API requests or reusable code.

### 5. Routing

1. Routing renders a component based on the URL state, drives navigation.

## Template Fundamentals

### 1. Interpolation and expressions

1. Text interpolation allows you to incorporate dynamic string values into your HTML templates. With interpolation, you can dynamically change what appears in an application view, such as displaying a custom greeting that includes the user's name.

1. A template expression produces a value and appears within double curly braces, {{ }}. Angular resolves the expression and assigns it to a property of a binding target. The target could be an HTML element, a component, or a directive.

1. With interpolation, Angular performs the following tasks:

  Evaluates all expressions in double curly braces.
  Converts the expression results to strings.
  Links the results to any adjacent literal strings.
  Assigns the composite to an element or directive property.

```html
<div> {{ title + '!'}} </div>
<div> {{ isHappy ? ':)' : ':(' }} </div>
```

1. You can change the default interpolation delimiters in a component using bellow syntax.

```typescript
@Component({
  selector: '.app-server-class',
  templateUrl: './server-class.component.html',
  styleUrls: ['./server-class.component.sass'],
  interpolation: ['_-', '-_']
})
```

### 2. Data Binding

1. ### [Property binding](https://angular.io/guide/property-binding)

1. ### [Event Binding](https://angular.io/guide/event-binding)

1. ### [Attribute Binding](https://angular.io/guide/attribute-binding)

1. ### [Two-way Binding](https://angular.io/guide/two-way-binding)

1. ### [Binding Syntax](https://angular.io/guide/binding-syntax)

1. ### [Property binding best practices](https://angular.io/guide/property-binding-best-practices)

1. ### [Template Reference variables](https://angular.io/guide/template-reference-variables)

Examples of Property Binding:
```html
<!-- Bind button disabled state to `isUnchanged` property -->
<button [disabled]="isUnchanged">Save</button>

<!-- Often interpolation and property binding can achieve the same results. The following binding pairs do the same thing. -->
<p><img src="{{itemImageUrl}}"> is the <i>interpolated</i> image.</p>
<p><img [src]="itemImageUrl"> is the <i>property bound</i> image.</p>

<p><span>"{{interpolationTitle}}" is the <i>interpolated</i> title.</span></p>
<p>"<span [innerHTML]="propertyTitle"></span>" is the <i>property bound</i> title.</p>
```

Examples of Event Binding:

```html
<!-- Event Binding -->
<button (click)="onSave()">Save</button>

<!-- Custom events with EventEmitter -->
<app-item-detail (deleteRequest)="deleteItem($event)" [item]="currentItem"></app-item-detail>
```

Examples of Attribut Binding:

```html
<!-- Attribute Binding -->
<!-- It is recommended that you set an element property with a property binding whenever possible. However, sometimes you don't have an element property to bind. In those situations, you can use attribute binding. -->
<p [attr.attribute-you-are-targeting]="expression"></p>

<!-- Binding ARIA attributes -->
<!-- create and set an aria attribute for assistive technology -->
<button [attr.aria-label]="actionName">{{actionName}} with Aria</button>
```

Examples of Class Binding:

```html
<!-- Binding to the class attribute -->
<!-- Setting a directive property -->
<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>
<!-- Binding to a single and multiple CSS class -->

<p [class.sale]="onSale">Single class binding</p>

<!-- classExpression can be string or Array<string> or json object -->
<!--
  string value can be like this "my-class-1 my-class-2 my-class-3"
  Array<string> can be ['foo', 'bar']
  Json object can be in the format {[key: string]: boolean | undefined | null} Eg: {foo: true, bar: false}
-->
<p [class]="classExpression">Multi class binding</p>
```

Examples of Style Binding:

```html
<!-- Binding to a single style -->
<div [style.width]="width">Some data with 100px</div>

<!-- Single style binding with units -->
<div [style.width.px]="width">Should provide a widht without px Eg: 100</div>
```

Examples of Two-way Binding:

```html
Angular's two-way binding syntax is a combination of square brackets and parentheses, [()]. The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding, (), as follows.

<app-sizer [(size)]="fontSizePx"></app-sizer>

Inorder to use two-way binding in the components we need to add angular FormsModule to the app.module.ts
```

Example using template varibale:

```html
<input #phone placeholder="phone number" />

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button (click)="callPhone(phone.value)">Call</button>
```

## Rendering flows(Driectives & pipes)

1. ### ngif

ngIf is structural directive used to display content if the condition inside the ngIf evaluates to true.

Eg:

```html
    <h3 *ngIf="calling; else noCallInProcess">{{ 'Calling ' + userName + ' on ' + callingNumber + ' ...!!'}}</h3>
    <ng-template #noCallInProcess><h3>Enter Name and Phone Number to make a call.</h3></ng-template>
```

1. ### ngFor

ngFor is a structural directive used to display an array of items in the UI.

Eg:

```html
<app-contact-detail *ngFor="let contact of myContacts" [contact]="contact" (delete)="handleDeleteContact($event)"></app-contact-detail>
```

1. ### ngClass

Examples:

```html
<!-- class property binding to add class based on condition success -->
<span class="non-highlight" [class.highlight]="userName && userName.toLowerCase().endsWith('gurram')" [innerText]="userName"></span>

<!-- Adding multiple classes using ngClass -->
<div class="non-highlight"
  [ngClass]="{'highlight': userName && userName.toLowerCase().endsWith('gurram'), 'strikeIt':true}"
  [innerText]="userName">
</div>
```

1. ### ngStyle

1. ngStyle is an attribute directive that updates styles for the containing html element.

Eg:

```html
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>

<some-element [ngStyle]="objExp">...</some-element>
```

1. ### [Pipes](https://angular.io/api?type=pipe)

Data transformation mechanism. Pipes are used to transform data.

Eg:

```html
<p>{{ date | date: 'longDate' }}</p>
```

1. ### Safe navigation operator

```javascript
passenge.children?.length || 0
```

1. ## Components Deep Dive

    1. We can pass input to the custom components using `@Input` decorator.

        Eg:

        ```html
        <!-- Passing myContacts array in the input variable contacts to the app-contact-count component -->
        <app-contact-count [contacts]="myContacts"></app-contact-count>
        ```

        ```typescript
        @Component({
          selector: 'app-contact-count',
          templateUrl: './contact-count.component.html',
          styleUrls: ['./contact-count.component.sass']
        })
        export class ContactCountComponent implements OnInit {

          @Input() contacts: Contact[];
          numberOfContacts: number;
        }
        ```

    1. To send data from child component to parent component we need to emit data using `@Output` decorator and EventEmitter.

        Eg:

        ```html
        <app-contact-detail (delete)="handleDelete($event)"></app-contact-detail>
        ```

        ```typescript
            @Component({
            selector: 'app-contact-detail',
            templateUrl: './contact-detail.component.html',
            styleUrls: ['./contact-detail.component.sass']
          })
          export class ContactDetailComponent implements OnInit {

            @Input() contact: Contact;
            @Output()
            delete: EventEmitter<Contact> = new EventEmitter();

            constructor() { }

            ngOnInit(): void {
            }

            onDelete(contact: Contact): void {
              this.delete.emit(contact);
            }

          }
        ```

    1. ngOnChanges life cycle hook will be invoked before ngOnInt, so the logic inside ngOnChanges should carefully check a condition to verify change happened in the component after intial rendering.

      Eg:
      
      ```typescript
          ngOnChanges(changes): void {
            if (!changes.contacts.firstChange) {
              console.log('Change invoked in contact count', changes);
              this.numberOfContacts = this.contacts.length;
            }
          }
      ```

## Services, Http and Observables

1. ### [Services](https://angular.io/guide/architecture-services)

    1. Services are class which can be used by all the componenets to share common data and functionality between components.

    1. Services can be injected into components using Dependency Injection.

    1. To inject services into components first we need to register the service into injector.

    1. Service can be registered in multiple ways.

        * By adding in providers of a module(All the components in the module can use it)
        * Registering using root injector using `@Injectable()` decorator by providedIn: 'root'(Recommended), providedIn feature in available from angular version 6.
        * By adding in providers in the component injector(This approach will create multiple service objects for each component instance).

    1. Registering the service with root injector ensures the service is available throughout the application.

    1. If the service registered using Component Injector, it is available only to that component and its child(nested) components. So the service is isolated from all other components, and multiple instances are created for each component instance.

    Examples of registering a service:
    
    ```typescript
    // Registering in the application root injector inside service
    // Registering the service in root injector inside Service class using providedIn is the recommended way for better tree shaking
    @Injectable({
      providedIn: 'root'
    })
    export class ContactsService{}

    // Registering the service in component
    @Component({
      selector: 'app-contacts',
      templateUrl: './contacts.component.html',
      styleUrls: ['./contacts.component.sass'],
      providers: [ContactService]
    })
    export class ContactsComponent implements OnInit {
      constructor(private contactsService: ContactsService) {}
    }

    // Before Angular 6 Services are registered in a module
    @NgModule({
      declarations: [
        ContactsComponent,
        ContactCountComponent,
        ContactDetailComponent
      ],
      imports: [
        CommonModule,
        HttpClientModule
      ],
      exports: [ContactsComponent],
      providers: [ContactService]
    })
    export class ContactsModule { }
    ```

1. ### [Http](https://angular.io/guide/http)

    1. Angular application work along with data from backend, inorder to fetch, create, delete, or update data from servers we need HttpClient service which comes along with angular HttpClientModule.

## [Navigation and Routing](https://angular.io/guide/router)

1. Inorder have routing in your angular application follow bellow steps.

1. Verify whether your index.html has `<base href="/">` defined in head section.

1. Next add RouterMoudle in the imports of app.module.ts or you can have seperate module(app.routing.module.ts) to config routes and import the AppRoutingModule in AppModule. By adding RouterModule to the application we can use router directives like routerLink and router services in the application.

1. To generate new angular project with routing add to the project use the bellow angular cli commond

    ```bash
    ng new routing-app --routing
    ```

1. If you didn't have routing enabled while creating the project, you need to add the RouterModule to AppModule or create a sperate module for routing and import it into AppModule.

    Eg:

    ```typescript
        // app.routing.module.ts
        import { NgModule } from '@angular/core';
        import { RouterModule, Routes } from '@angular/router';
        import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
        import { ContactsComponent } from './contacts/contacts.component';
        import { ServerComponent } from './server/server.component';

        const routes: Routes = [
          {path: 'contacts', component: ContactsComponent},
          {path: 'contacts/:id', component: ContactDetailComponent},
          {path: 'welcome', component: ServerComponent},
          {path: '', redirectTo: 'welcome', pathMatch: 'full'},
          {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ];

        @NgModule({
          imports: [
            RouterModule.forRoot(routes, {useHash: false})
          ],
          exports: [RouterModule]
        })
        export class AppRoutingModule {}
    ```

1. While adding routes into the routes array make sure path has no leading slash.

1. In AppRoutingModule we have invoked forRoot method, but we can seperate our routes into their own module in future, so while defining routes in feature modules don't use RouterModule.forRoot instead use RouterModule.forChild. Invoking forRoot in feature modules will register the router service providers mutliple times.

1. AppRoutingModule should be last module in the imports of AppModule. This is beacuse angular will register the routes based on the order of imports.

1. The wild card route '**' should always be in the last.

1. Add the RouterLink directive as an attribute to any clickable element, enclosed in a square brackets. Bind routerLink to link parameters array, first element is the path, and all other elements in the array are valid route parameters.

    Eg:

    ```html
    <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
    <li><a class='nav-link' [routerLink]="['/contacts']">Contacts</a></li>

    <!-- Binding with parameters -->
    <a class='nav-link' [routerLink]="['/contacts', contact.id]">{{ contact.name }}</a>
    ```

1. After creating the routing module we should have `<router-outlet></router-outlet>` tags in root component to load content based on url.

1. Protecting routes with Guards

    * CanActivate
      - Guard navigation to a route
    
    * CanDeactivate
      - Guard navigation from a route(Ex: While leaving the Add/Edit forms without saving)
    
    * Resolve
      - Pre-fetch data before activating a route

    * CanLoad
      - Prevent asynchronous routing

1. Activating a Route with code needs `Router` serivce from RouterModule.

  ```typescript
  this.router.navigate(['/welcome']) // Standard syntax

  this.router.navigate('/welcome') // Short cut syntax
  // When using router's navigate method secondary routes are reatined.

  this.router.navigateByUrl('/welcome') // Complete Url path

  /*
  Eg: 
  http://localhost:4200/products(secondary-url-segment) //Current route

  When you use navigate method it will just replace the primary route it will retain the secondary route
  */
  ```

1. Reading route parameters we need `ActivatedRoute` service to be injected into components where we need route parameters.

1. Defining optional route parameters. Optional values are seperated using `;` from the url.

  ```html
  <a [routerLink]="['/products', {name: productName, category: productCategory}]">Search</a>

  <!-- The above router link will form url like this localhost:4200/products;name=HeadPhones;category=Over%20the%20ear -->
  ```

1. Optional route params can be accessed in the same way as route parameters using `ActivatedRoute` service.

    ```typescript
    this.route.snapshot.paramMap.get('name');
    ```
  
1. Passing query parameters in url. You can pass query parameters in links using `queryParams` attribute.

    ```html
    <!-- Passing Query Params --->
    <a [routerLink]="['/products']"
       [queryParams]="{filter: listFilter, showImage:showImage}">Product Name</a>
    ```

    ```typescript
    // Passing query params router service navigate
    this.router.navigate(['/products'], {queryParams: {filterBy: this.listFilter, showImage}});
    ```

1. Retaining the query parameters from current url to next navigated url using `queryParamsHandling`. queryParamsHandling handle can take values `preserve` and `merge`.

  ```html
  <button class="btn btn-outline-secondary mr-3"
                style="width:80px" routerLink="/products"
                queryParamsHandling="preserve">
  ```

  ```typescript
  this.router.navigate(['/products'],
            { queryParamsHandling: 'preserve' }
  );
  ```

1. Reading query parameters in components. You can read the query parameters same as required or optional parameters using `ActivatedRoute` service.

    ```typescript
    this.route.snapshot.queryParamMap.get('filter');
    this.route.snapshot.queryParamMap.get('showImage');
    ```

### Prefetching Data Using Route Resolvers

1. To have better user experience we can retirve the data required for display in a components, before routing to the component.

1. We can prefetch data using route resolvers.

1. We need to provide data to routes, there are multiple ways we can achive this. The best way in any particular scenario depends on the amount of data, scope of sharing and how the data is used.

    * Required Route Parameters
    * Optional Route Parameters
    * Query Parameters
    * Route's Data Property
    * Router Resolver
    * Angular Service
  
1. Route's Data Property

  ```typescript
  @NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: 'products',
          component: ProductListComponent,
          data: { pageTitle: 'Product List'}
        }
      ])
    ]
  })
  ```

1. We can get the data provided in the route configuration by using `ActivatedRoute` service.

  ```typescript
  this.pageTitle = this.route.snapshot.data['pageTitle'];
  ```

1. Steps involed in adding a Route Resolver

    1. Build a route resolver service
    1. Add `resolve` to the route configuration
    1. Read teh data from `ActivatedRoute`

1. To create a Route Resolver service you need to implement `Resolve` interface.

### Child Routes

1. Child routes can be used when there is lot of conent to be displayed in a single component. You can organize the data in multiple tabs and used child routes to load the tabs into `<router-outlet></router-outlet>` into already routed outlet component.

1. Child routes can be used in Tabbed Pages, Master/detail layouts, Embedded Templates.

1. Child routes are required for lazy loading.

1. Configuring child routes using `children` property while configuring routes.

    ```typescript
    const routes: Routes = [
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductResolver } },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        resolve: { resolvedData: ProductResolver },
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ]
      }
    ];
    ```

1. Add the child routes in the component. We can add the routes to component in two ways.

    * Absolute path

      ```html
      <a [routerLink]="['/products', product.id, 'edit', 'info']">Info</a>
      ```

    * Relative path(Just use the path without `/`)

      ```html
      <a [routerLink]="['info']">Info</a>
      ```

1. Invoking child routes from code(.ts files) using `ActivatedRoute` service

    ```typescript
    // Absolute Path
    this.route.navigate(['/products', this.product.id, 'edit', 'info']);

    // Relative Path
    this.route.naviage(['info'], {relativeTo: this.route});
    ```

1. Child routes can use data from resolvers like normal routes, they can also use parents resolver data.

    ```typescript
    this.route.parent.snapshot.data['resolvedData'];

    // Observable
    this.route.parent.data.subscribe(data => {
        const resolvedData = data.resolvedData;
        this.errorMessage = resolvedData.error;
        this.onProductRetrieved(resolvedData.product);
    });
    ```

## Content Projection using ng-template, ng-content, ng-container and *ngTemplateOutlet

1. [Read This](https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/)

1. [Different Use Cases for <ng-template>](https://www.concretepage.com/angular-2/angular-4-ng-template-example)

## ViewChild and ViewChildren

1. [Read This](https://medium.com/technofunnel/angular-viewchild-and-viewchildren-fde2d252b9ab)

1. [Querying the DOM with @ViewChild and @ViewChildren](https://app.pluralsight.com/guides/querying-the-dom-with-@viewchild-and-@viewchildren)

## Angular Modules

1. A class with @NgModule decorator.

1. Its purpose:
    - Organize the pieces of our applicaiton
    - Arrange them into blocks
    - Extend our application with capabilites from external libraries
    - Provide a template resolution environment
    - Aggregate and re-export

1. A angular module can be loaded egarely or lazily.

1. In order to create a new feature module and import in app module use the bellow command

    ```bash
    # Use --flat flag if you want to create the module in contacts folder instead of creating a new folder contact inside contacts.
    # -m is to tell to which module we need to add the newly created module
    ng g m contacts/contact --flat -m app
    ```

1. Feature modules can be prefetched to improve the performance of the application using the prefetchingStrategy in angular. You can have custom prefetching strategy by implementing PreloadingStrategy.

    * Read the bellow articles for more details on preloading modules
        - [Preloading Stratgies by Jhon Papa](https://johnpapa.net/predictive-preloading-of-your-angular-bundles/)
        - [Medium blog about Prefetching modules](https://medium.com/@muthudevendra/angular-custom-preloading-strategy-32abe99944f8)
