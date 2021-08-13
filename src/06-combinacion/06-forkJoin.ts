import { of, interval, forkJoin } from 'rxjs';
import { delay, take } from 'rxjs/operators';


const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe( take(3) ); //0...1...2
const letras$ =of('a','b','c').pipe( delay(3500) );

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(console.log)
// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(resp => {
//     console.log('numero', resp[0]);
//     console.log('intervalo', resp[0]);
//     console.log('letras', resp[0]);
// })
// forkJoin({ 
//     numeros$,
//     intervalo$,
//     letras$
// }
// ).subscribe(resp => {
//    console.log(resp);
// })

//forkJoin manda el total de todos los objetos juntos en este caso solo mandaria 
//los ultimos valores que se mandan 
//esta entre corchetes ya que lo trasformamos en un objeto 
//resp es traformar el subcribe en datos
forkJoin({ 
   num: numeros$,
   int: intervalo$,
   let: letras$
}
).subscribe(resp => {
   console.log(resp);
})