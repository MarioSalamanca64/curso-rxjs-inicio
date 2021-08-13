import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map, pluck } from 'rxjs/operators';
import { of } from 'rxjs';


const url = 'https://api.github.com/users?per_page=5';
// CONSTRUCION SI USAMOS EL METODO FECH
// const manejaErrores = (respose:Response) => {
//     if(!respose.ok){
//         throw new Error(respose.statusText);
//     }
//     return respose;
// }

const atrapaError = (err:AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}

//fech es para hacer peticiones http pero en forma promesa
//const fetchPromesa = fetch( url );

// fetchPromesa
//             .then( resp => resp.json() )
//             .then( data => console.log('data:',data))
//             .catch(err => console.warn('error en usuarios') )

//EN EL CASO DE USAR FECH SOLA MENTE SE TIENE QUE USAR ASI
// fetchPromesa
//             .then( manejaErrores )
//             .then( resp => resp.json() )
//             .then( data => console.log('data:',data))
//             .catch(err => console.warn('error en usuarios', err))
//PETICION CON OBSERBABLES MAS SENSILLO 
ajax(  url  ).pipe(
    //map(resp => resp.response)
    //mas sensillo 
    pluck('response'),
    //catchError si aparese un error manda un error echo por nosotros o otro obserbable que haga otra cosa
    catchError(  atrapaError )
)
.subscribe(users => console.log('usuarios:',users))