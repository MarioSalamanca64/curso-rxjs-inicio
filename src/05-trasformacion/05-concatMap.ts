import { interval, fromEvent } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';



const interval$ = interval(500).pipe(take(3));
const click$    = fromEvent(document, 'click');


click$.pipe(
    //concatMap lo que hace es concatenar los clicks en este caso mandaria 012 y al terminar
    //dependiendo de los clicks que diste mostraria los subscribe si son 5 veces seria 012*5
    concatMap( () => interval$ )
)
.subscribe(console.log)