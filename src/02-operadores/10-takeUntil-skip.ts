import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

//js normal
//createElemente es crear un boton
const boton = document.createElement('button');
//innerHtml es lo que esta adentro del voton lo que dice el texto
boton.innerHTML = 'Detener Time';
//querySelector donde lo colocara ene ste caso en body
//append es el elemento
document.querySelector('body').append(boton);


//rxjs

//interval tiempo en que se ejecuta
const counter$  = interval(1000);
//fronEven  calcualr los eventos y dar sus valores
//const clickBtn$ = fromEvent( boton, 'click' );
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap(() => console.log('tap antes de skip') ),
    //skip pones los valores determinados y ejecuta comensaria a emitir los operadores sigientes
    skip(1),

    tap(() => console.log('tap despues de skip') ),
    )

counter$.pipe(

    //takeUntil nos permite estar emitiendo los valores asta que otro obserbable entre y se complete
    takeUntil(clickBtn$)

)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),

});


