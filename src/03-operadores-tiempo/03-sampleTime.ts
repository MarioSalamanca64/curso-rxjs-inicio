import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

//fromEvent que este pendinete a ese evento
const click$ = fromEvent<MouseEvent>( document, 'click')


click$.pipe(
    //sampleTime agarra el ultimo valor emitido despues de 2seg
    sampleTime(2000),
    map(({x,y}) => ({x,y}))
).subscribe(console.log);