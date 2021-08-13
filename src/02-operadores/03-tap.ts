import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1,5);


numeros$.pipe(
    //tap es mostrar el momento en que le esta el subcriber
    tap( x => {
        console.log('antes', x);
        return 100;
    }),
    map( val => val * 10),
    //muestra los cambios en este punto 
    tap( {
       next: valor => console.log('despues', valor ),
       complete: () => console.log('Setermino todo')
    })
)
.subscribe(val => console.log('subs',val));