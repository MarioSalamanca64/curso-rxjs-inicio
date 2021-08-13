import { from } from "rxjs";
import {  distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre:'Megaman'
    },
    {
        nombre:'Megaman'
    },
    {
        nombre:'zero'
    },
    {
        nombre:'dr. willy'
    },
    {
        nombre:'x'
    },
    {
        nombre:'x'
    },
    {
        nombre:'zero'
    },
]
//from de donde osea de objeto personajes
from(personajes).pipe(
    //si estan repetidos consecutibos no los emitira y es atrabes del valor del objetos en este caso nombre
    distinctUntilKeyChanged('nombre')
).subscribe(console.log)