import { of, from, Observer, observable } from 'rxjs';

// of = toma argumentos y genra una secuencia 
// from =  array, promise, interable, observable

const observe = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
};

const miGenerador = function*() {
    yield  1;
    yield  2;
    yield  3;
    yield  4;
    yield  5;
}

const miIterable = miGenerador();

//barrer de la forma tradicional 1
// const miIterable = miGenerador();
// for(let id of miIterable){
//     console.log(id);
// }
//                               2
from( miIterable ).subscribe( observe );


// from esta esperando un areglo objeto algo
// dan el mismo resultado con el mismo codigo
// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

//a qui emitira letra por letra por cada emicion
// const source$ = from('Mario');

// convertir cual quier cosa en observable
// fetch() hacer un p[eticion http en javascript
const source$ = from( fetch('https://api.github.com/users/MarioSalamanca64'))

//resivir los datos de la api aparecen los datos por la parte de from
// source$.subscribe( async(resp) => {

//     console.log(resp);   
//     const dataResp = await resp.json();
//     console.log(dataResp);
// })


// source$.subscribe(observe);



