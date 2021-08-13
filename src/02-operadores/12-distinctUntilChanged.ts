import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of<string|number>(1,'1',1,1,3,3,2,2,4,4,5,3,1,'1');

numeros$.pipe(
    //distinctUntilChanged no emite lo valores iguales consecutivos si no estan consecutivos si lo emite aunque sean los mismos
    distinctUntilChanged()
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
    //disting tenermos que espesificar en este caso el campo del objeto antes y despues si se repite
    distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre )
).subscribe(console.log)