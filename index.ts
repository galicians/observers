import { Observable, of, from, interval } from 'rxjs'; 
import { map, tap, take } from 'rxjs/operators';

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

sub.unsubscribe();

const appleStreamTwo = of('Apple1', 'Apple2');

const appleStreamThree = from(['Apple1', 'Apple2']);

const apples = ['Apple 1', 'Apple 2'];

of(apples).subscribe(x => console.log(x, typeof x))

from(apples).subscribe(x => console.log(x, typeof x))

of(...apples).subscribe(x => console.log(x, typeof x))

// const num = interval(1000).subscribe(console.log)

of(2, 4, 6)
  .pipe(
    map(item => item * 2),
    tap(item => console.log(item)),
    take(2)
  ).subscribe(console.log)