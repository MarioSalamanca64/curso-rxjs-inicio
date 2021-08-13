import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';


const interval$ = interval(5000);
const click$    = fromEvent(document, 'click');


interval$.pipe(
    //sample obtengo la muestra de como esta mi intervalo en este momento
    sample(click$)
).subscribe(console.log)