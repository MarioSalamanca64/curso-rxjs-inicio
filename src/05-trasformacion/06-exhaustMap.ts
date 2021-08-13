import { interval, fromEvent } from 'rxjs';
import { concatMap, exhaustMap, switchMap, take } from 'rxjs/operators';



const interval$ = interval(500).pipe(take(3));
const click$    = fromEvent(document, 'click');


click$.pipe(
    //echaustMap en este caso ignira los demas obserbables que estan en intervalo del primero 
    //en este caso damis el click tinee que pasar 012 pero si damos click entre 012 lo ignorara asta que cabe 
    //y lanse la otra peticion 012
    exhaustMap( () => interval$ )
)
.subscribe(console.log)