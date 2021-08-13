import { of } from "rxjs";
import { take, tap } from "rxjs/operators";


const numeros$ = of(1,2,3,4,5,6)
.pipe(tap(console.log));

numeros$.pipe(
    tap(t => console.log('tap', t)),
    //take solo deja que termine en el 3 valor si fueran 30 aun asi termina en el 6
    take(3)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
})