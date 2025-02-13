import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number , valorActual:number) => {
    return acumulador + valorActual;
}
//reduce es de que e numero empieza 
const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total);


interval(500).pipe(
    //take es asta que numero llega
    take(6),
    tap(console.log),
    reduce( totalReducer)
)
.subscribe(
    {
        next: val => console.log('next:', val),
        complete: () => console.log('Cpmplete')
    }
)