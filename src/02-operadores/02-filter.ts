import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter( val => val % 2 === 1)
// ).subscribe(console.log);


range(20,30).pipe(
    // en este caso filter ayuda a filtart los datos en este caso no queremos que muestre 
    //lo numeros pares solo los impares 
    filter( (val, i) => {
        console.log('index', i );
       return val % 2 === 1
    })
)//.subscribe(console.log);

interface Personaje{
    tipo: string;
    nombre: string;
}

const personajes:Personaje[] = [
    {
        tipo:'heroe',
        nombre:'batman'
    },
    {
        tipo:'heroe',
        nombre:'robin'
    },
    {
        tipo:'villano',
        nombre:'joker'
    },


];
//from un barrido de personages
from(personajes).pipe(
    //filter hace que solo muestre el tipo heroe de nuestro areglo
    filter( p => p.tipo === "heroe" )
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    // map trabajar con informacion que estoy resibiendo
    map( event => event.code ), // resive un keyboardEvent y sale un string
    //solo deja pasar el enter
    filter( key => key === 'Enter')
);

keyup$.subscribe( console.log );

