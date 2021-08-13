import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);


click$.pipe(
    //en este caso el mergeMap damos click no mstrara eso pero si hacemos doble o triple click
    //por cada click se crea una nueva subcripcion y lo mostrara al mismo tiempo 
    //mergeMap(() => interval$)
    //en este caso switcMap lo que hace es que al momento de suscribirnos y darle click comensara el intervalo
    //cada click reiniciara el intervalo desde 0
    switchMap(() => interval$)
).subscribe(console.log)