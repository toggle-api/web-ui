import { MapSignature } from 'rxjs/operator/map';
declare module 'rxjs/Observable' {
  interface Observable<T> {
    map: MapSignature<T>;
  }
}

import { CatchSignature } from 'rxjs/operator/catch';
declare module 'rxjs/Observable' {
  interface Observable<T> {
    catch: CatchSignature<T>;
  }
}

import { fromPromise as staticFromPromise } from 'rxjs/observable/fromPromise';
declare module 'rxjs/Observable' {
  namespace Observable {
    let fromPromise: typeof staticFromPromise;
  }
}
