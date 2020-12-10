# Angular Fundamentals

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

### 3. Directives

1. Directives attach behaviour, extend or transform a particular element and its childern.

1. Angular has lot of inbuilt directives.

### 4. Services

1. Services are a data layer, logic that is not a component related, such as API requests or reusable code.

### 5. Routing

1. Routing renders a component based on the URL state, drives navigation.
