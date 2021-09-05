d# RxJS in Angular: Reactive Development

## What is RxJS ?

* RxJS is a library for composing asynchronous and event-based programs by using observable sequences.

* Manage Data as it flows through time.

    * Collect
    * Pipe through a set of operations
        - Transform
        - Filter
        - Process
    * Combine
    * Cache

* RxJS is a library for composing observable streams and optionally processing each item in the stream using an extensive set of operators.

## Why RxJS ?

* One technique to rule them all
* Compositional
* Watchful
* Lazy
* Handles errors
* Cancellable

## What is Reactive Development ?

* A declarative programming paradigm concerned with data streams and propagation of change.

* Quick to react to user interactions

* Resilint to failure

* Reactive to state changes

## RxJS Terms and Syntax

1. Subscribe - Emits the items

1. Pipe through set of operations

1. Observer is an object with 3 basic methods next(), error(), complete().

1. Unsubscribe

### Observer/Subscriber

1. In RxJS an observer is a object that monitors a stream. Observes the stream and responds to its notifications.

1. next() method to handle the next item emitted in the stream.

1. error() method to handle error condition.

1. complete() to do any final processing or clean up when the stream is complete.

1. Observer observes the stream and responds to its notifications.

1. Observer is a collection of callbacks that knows how to listen to values delivered by the Observable.

1. So the next(), error(), complete() are the callbacks, as each item is emitted.

1. Observer is a JavaScript object that defines the handlers for the notifications you receive.

1. In RxJS, an Observer is also defined as an interface with next, error and complete methods.

### Subscriber

1. In RxJS Observer is a interface with 3 methods next, error and complete.

1. Subscriber is a class which implements Observer.

1. In RxJS(implementations) each observer is converted to a subscriber. A subscriber is basically an observer with additional features to unscribe from the observable stream using unscribe method.

1. In our angular projects we mostly use observer.


    ```typescript
    const observer = {
        next: apple => console.log(`Apple was emitted ${apple}`),
        error: err => console.log(`Error occurred: ${err}`),
        complete: () => console.log('No more apples, go home`)
    };
    ```

## Observable Stream

1. Any stream of data, optionally produced over time, Numbers, Strings, Events, like response from HTTP request.

1. Observables can be synchronous or asynchronous.

1. Observable can emit a finite or infinite numbers of values.


    ```typescript
    const appleStream = new Observable(appleObserver => {
        appleObserver.next('Apple 1');
        appleObserver.next('Apple 2');
        appleObserver.complete();
    });
    ```

## Subscription(Starting the Observable Stream)

1. In RxJS we start the stream by subcribing to the observable.

1. We must subscribe to start the Observable stream.

    ```typescript
    const sub = appleStream.subscribe(observer);
    ```

     OR

    ```typescript
    const sub = appleStream.subscribe(
        apple => console.log(`Apple was emitted ${apple}`),
        err => console.log(`Error occurred: ${err}`),
        () => console.log(`No more apples, go home`)
    );
    ```

## Stopping an Observable Stream

1. Calling complete method of the observer automatically unsubscribes and execute the observers complete() method.

1. By using completing operator like `from` and `take` will automatically unscribes and execute the observer's complete method.

1. Throw an error - error method of the observer gets invoked and unsubscribe from observable without calling complete method on the observer.

1. Unsubscribe manually, by calling `unsubscribe` method of a subscription also stops the stream.
Unsubscribe doesnot call the complete method, it simplt lets the stream know that we are no longer interested in observing it, so it wont emit.

    ```typescript
    const sub = appleStream.subscribe(observer);
    sub.unsubscribe();
    ```

1. Properly unsubscribing from each Observable prevents memory leaks.

## Creation Functions

1. We can create an observable by using Constructor, but there are functions available to create observables like `of`, `from`, `fromEvent`, `interval` etc.

    ```typescript
    @Component({
        selector: "my-app",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
        })
    export class AppComponent implements OnInit {
        name = "Angular " + VERSION.major;
        numbers = interval(1000);
        timer = 0;
        takeFourNumbers = this.numbers.pipe(take(101));
        ages = of(1, 2, 3, 4);
        age = 0;

        ngOnInit() {
            this.takeFourNumbers.subscribe({
            next: value => (this.timer = value),
            error: err => console.log(err)
            });
            this.ages.pipe(
            delay(1000)
            ).subscribe({
            next: age => (this.age = age)
            });
        }
    }
    ```

1. Creating observables using `of` and `form`

    ```typescript
    const appleStream = of('Apple 1', 'Apple 2') // emits two apples and completes

    const ageStream = from([21, 22, 23, 24]) // from creates observable using array or other data structures, emitting each item and then completing the stream
    ```

1. of vs from, of takes set of elements and emit each item, where as from takes an array or data structure and emit each element.

    ```typescript
    const apples = ['Apple 1', 'Apple 2']
    from(apples) // Apple 1,  Apple 2
    of(apples) // [Apple 1, Apple 2]
    of(...apples) // Apple 1, Apple 2
    ```

1. Creating an Observable using `fromEvent`, `inteval`

    ```typescript
    @ViewChild('para') par: ElementRef;

    ngAfterViewInit() {
        const parStream = fromEvent(this.par.nativeElement, 'click')
            .subscribe(console.log)
    }

    const num = interval(1000).subscribe(console.log)
    ```

## RxJS Operators

1. Items are piped through a set of operators

1. Transform items in a stream using `map`, `tap`, `take` operators

    ```typescritp
    of(2, 4, 6)
    .pipe(
        map(item => item * 2),
        tap(item => console.log(item)),
        take(2)
    ).subscribe(console.log);
    ```

## Going Reactive

1. Focus on async data streams, leverage RxJS operators, React to actions

### Working with Async Pipe

1. Collect the data in observables in components and use `async` pipe in components template to display data when data is available or changed.

    ```typescript
    products$: Observable<Product[]>;

    ngOnInit() {
        this.products$ = this.productService.getProducts();
    }
    ```

    ```html
    <div *ngIf="product$ | async as products">
        <table>
            <tr *ngFor="let product of products">
                <td>{{product.name}}</td>
                <td>{{product.code}}</td>
            </tr>
        </table>
    </div>
    <div *ngFor="let x of products$ | async">{{x.name}}</div>
    ```

### Handling Errors

1. We can use `catchError` operator from rxJs to catch the exception and return a default observable response or re-throw it.

1. Catch and Rethrow we can use `throwError` from rxJs which returns a replacement observable and rethrow the error.

    ```typescript
    return this.http.get<Product[]>(this.productsUlr)
    .pipe(
        catchError(this.handleError)
    )

    private handleError(err) {
        // ...
        return throwError(errorMessage)
    }
    ```


