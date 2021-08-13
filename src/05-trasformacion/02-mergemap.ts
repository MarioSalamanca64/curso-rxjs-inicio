import { interval, of, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';


const letras$ = of('a','b','c');



letras$.pipe(
    //mergeMap toma barios interval y los toma en cuenta asta que se acaban todos los interval
    mergeMap((letra) => interval(1000).pipe(
        map( i => letra + i ),
        take(3)
    ))
)
//.subscribe({
//     next: val => console.log('next',val),
//     complete: () => console.log('complete')
// });

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    //mergeMap toma los interval y los muestra cada uno asta el final
    mergeMap(() => interval$.pipe(
        //cuando emite un valor se toma en cuenta
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log)