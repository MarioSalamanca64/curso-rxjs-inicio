import { from } from "rxjs";
import { map, reduce, scan } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }
const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from(numeros).pipe(
    //muestra el total acumulado
    reduce( totalAcumulador , 0)
)
.subscribe(console.log)

//Scan
from(numeros).pipe(
    //muestra como va cambiando a asta el acumulado
    scan( totalAcumulador , 0)
)
.subscribe(console.log)

// Redux
interface Usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad: number;
}
const user: Usuario[] = [
    { id: 'fher', autenticado: false, token:null, edad:50  },
    { id: 'fher', autenticado: false, token:'ABC', edad:50  },
    { id: 'fher', autenticado: false, token:'ABC123', edad:50 },
];

const state$ = from( user ).pipe(
    scan<Usuario>((acc, cur) => {
        return{...acc, ...cur}
    }, {edad:33})
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log)

