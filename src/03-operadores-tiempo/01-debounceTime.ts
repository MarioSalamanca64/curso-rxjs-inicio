import { fromEvent } from "rxjs";
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    //debounceTime hace que en sierto tiempo se active aun que se en ese trascurso se pide otro elemento no lo capturara
    debounceTime(3000)
);//.subscribe(console.log)


const input  = document.createElement('input');
document.querySelector('body').append(input)


const input$ = fromEvent(input,'keyup');

input$.pipe(
    debounceTime(1000),
    //pluck llamar los datos del evento keyup q esta en target-value
    pluck('target', 'value'),
    //distinctUntilChanged para que no se repitan muchas veces 
    distinctUntilChanged()
).subscribe(console.log);