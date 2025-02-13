import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = 'klerith';
//manda todos los datos de la api y ya bienen de manera aplanada sin tener que volverlo en al guna otra caso
//o crear la respuesta
forkJoin(
{
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos123123s`
    ).pipe(
        //atrapar el error aqui para que las otras dos puedan pasar sin porblemas 
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    )
}
).pipe(
    catchError(err => of(err.message))
)

.subscribe(console.log)