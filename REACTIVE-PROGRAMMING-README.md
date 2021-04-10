# RxJS in Angular: Reactive Development

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
* Laxzy
* Handles errors
* Cancellable

## What is Reactive Development ?

* A declarative programming paradigm concerned with data streams and propagation of change.

* Quict to react to user interactions

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

1. Observer is a collection of callbacks that knows how to listen to values delivered by the Observable.

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

1. Any stream of data, optionally produced over time, like response from HTTP request.

1. Observables can be synchronous or asynchronous.

1. Observable can emit a finite or infinite numbers of values.


    ```typescript
    const appleStream = new Observable(appleObserver => {
        appleObserver.next('Apple 1');
        appleObserver.next('Apple 2');
        appleObserver.complete();
    });
    ```

## Starting teh Observable Stream

1. In RxJS we start the stream by subcribing to the observable.

1. We must subscribe to start the Observable stream.

    ```typescript
    const sub = appleStream.subcribe(observer);
    ```

## Stopping an Observable Stream

1. Calling complete method of the observer automatically unsubscribes and execute the observers complete() method.

1. By using completing operator like from and take will automatically unscribes and execute the observer's complete method.

1. Throw an error

1. Unsubscribe manually.

## Creation Functions

1. We can create an observable by using Constructor, but there are functions available to create observables like of, from, fromEvent, interval etc.

    ```typescript
    const appleStream = of('Apple1', 'Apple2');

    const appleStream = from(['Apple1', 'Apple2']);
    ```

