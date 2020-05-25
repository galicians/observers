import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);
source.subscribe(x => console.log(x));

const observer = {
  next: apple => console.log(`Apple was emitted ${apple}`),
  error: err => console.log(`Error ocurred: ${err}`),
  complete: () => console.log(`No more apples, go home`)
};

const appleStream = new Observable(appleObserver => {
  appleObserver.next('Apple 1');
  appleObserver.next('Apple 2');
  appleObserver.complete();
});

const sub = appleStream.subscribe(observer)