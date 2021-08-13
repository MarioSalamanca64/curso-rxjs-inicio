import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


// range(1,5).pipe(
//     //map hace la funcion del balos que este ariba 
//     //en este caso desimos que entra un number y regrese un nomber
//     map<number,string>( val => (val * 10).toString())
// )


const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyupCode$ = keyup$.pipe(
    //map usa un funcion para cambiar el modo en que se manda puede asta mutiplicar y lo cambiara 
    //extraer el codigo de la tecla precionada
    map( event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    //pluck manda exactamente lo que pides quieta todo lo demas y lo trae en este caso 
    //desimos que entre a target y de target a baseUri y trae el objeto 
    pluck('target','baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    //todo lo que pase por mapTo siempre sera lo mismo no cambiara su salida 
    mapTo('Tecla precionada')
);

keyup$.subscribe(console.log);

keyupCode$.subscribe(code => console.log('map', code))
keyupPluck$.subscribe(code => console.log('pluck', code))

keyupMapTo$.subscribe(code => console.log('mapTo', code))

