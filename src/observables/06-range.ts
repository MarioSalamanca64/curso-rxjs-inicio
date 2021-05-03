import { asyncScheduler, of, range } from 'rxjs';

//contar del 1 al 100
// const src$ =  range(1,100);
//a qui no es del 1 al 5 si no que haga 5 emiciones
// const src$ =  range(-5,10);
//empieza del 0 al 5 
// const src$ =  range(5);
//mandarlo de un forma asincrona para que aparesca al final de los console y no enmedio
const src$ =  range(1,5, asyncScheduler);

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');