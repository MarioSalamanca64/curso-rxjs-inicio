import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');


click$.pipe(
    tap<MouseEvent>(console.log),
    //primera forma
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.cloentX
    // }))
    //segunda forma ya solo emitiendo los valores que nos interesan en la desestruturacion
    map(({clientX,clientY}) => ({clientY,clientX})),
    //firs solo se emitira el evento una ves y ya queda completado
    first( event => event.clientY >= 150 )
)
.subscribe( {
    next: val => console.log('next', val),
    complete: () => console.log('complete') 
});