import { concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';


const interval$ = interval(1000);
//concat manda los datos de un interval al terminar seguira con eltro asta que no haya mas
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1,2,3,4]

).subscribe(console.log)