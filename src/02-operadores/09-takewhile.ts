import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    //map cambia los valores en este caso desestructura y solo muestra los dos valores 
    map(({ x,y }) => ({x,y})),
    //takewhile hace que despues de 150 en adelante se complete y ya mp siga emitiendo valores
    //pone condiciones
    //takeWhile( ({y}) => y <= 150 )
    //para que acepte el ulrimo valor osea 150 o mas pero se completa
    takeWhile( ({y}) => y <= 150, true )
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})