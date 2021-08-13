import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<string|number>(1,'1',1,1,3,3,2,2,4,4,5,3,1,'1' );

numeros$.pipe(
    //disting solo hace pasar valores diferrentes si se repiten no los pasara 
    distinct()
)
.subscribe( console.log )

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre:'Megaman'
    },
    {
        nombre:'x'
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
        nombre:'Megaman'
    },
    {
        nombre:'zero'
    },
]
//from de donde osea de objeto personajes
from(personajes).pipe(
    //disting tenermos que espesificar en este caso el campo del objeto
    distinct( p => p.nombre )
).subscribe(console.log)