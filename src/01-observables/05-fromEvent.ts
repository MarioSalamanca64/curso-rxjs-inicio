import{ fromEvent } from 'rxjs';


/**
 * Eventos del DOM
*/
//document es en si el html click es para escuchar el evento
//tienes que poner el tipo apara que se peuda ver en los subcribers
//from evente sirve para calcular los eventos y dar sus valores
const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: val => console.log('next', val) 
};
// primeraforma
// src1$.subscribe( ev => {
//     console.log(ev.x);
//     console.log(ev.y)
// });
// segunda forma de todos los datos se le dice que solo se interesa x y y 
src1$.subscribe( ({x,y}) =>{
    console.log(x,y)
});
src2$.subscribe( evento => {
console.log(evento.key)
});