import {of} from 'rxjs';


//of recorre los datos que pongas dentro de el 
//... se pararia cada uno de los argumentos de manera independiente
// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(...[1,2,3,4,5,6]);
//const obs$ = of([1,2],{a:1, b:2}, function(){},true ,Promise.resolve(true));
// vemos que los observables tanbien trabajan d euna forma asincrona
console.log('inicio del obs$')
obs$.subscribe( 
    next => 
    console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia') 
    );
console.log('Fin del obs$');