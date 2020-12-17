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

1. ### [Binding Syntax](https://angular.io/guide/binding-syntax)

1. ### [Property binding best practices](https://angular.io/guide/property-binding-best-practices)

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
