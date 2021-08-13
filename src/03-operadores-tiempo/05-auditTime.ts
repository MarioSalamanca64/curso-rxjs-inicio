import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');



click$.pipe(
    //maptrasforma los datos
    map(({ x }) => x),
    //tap muestra los valores como estan 
    tap(val => console.log('tap', val)),
    //auditTime emite el ultimo valor del evento
    auditTime(5000)
).subscribe(console.log)