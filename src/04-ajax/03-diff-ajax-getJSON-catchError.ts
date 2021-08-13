import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinxxxx.org/delay/1';
const manejaError = ( resp:AjaxError) => {
    console.warn( 'error', resp.message );
    return of({
        ok: false,
        usuarios: []
    });
}

//ajax.getJSON se usa para obterner informacion de la api y en segundo argumento podemos mandar heders para tokens etc
// const obs$ = ajax.getJSON( url ).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax( url ).pipe(
//     catchError(manejaError)
// );

//getJSON manda menos datos que el ajax normal
const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );


//bs2$.subscribe( data => console.log('ajax:', data));
//subcribe puedes mandar tres funciones next que toma los valores si hay un error error y ya que termino complete
obs$.pipe(
    //en este caso como mandamos catchError no tomaria en cuenta el error del subcribe y como no lo toma encuenta
    //se pasaria al next 
    catchError( manejaError )
).subscribe({
    next: val => console.log('next:',val),
    error: err => console.warn('error en sub:',err ),
    complete: () => console.log('complete'),
});