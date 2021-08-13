import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';

//Helper significa auxiliar
//resivir el objeto user pass el email y pass
const peticionHttpLogin = ( userPass ) => 
//userpass es el objeto que tenemos que mandar 
 ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
     pluck('response', 'token'),
     //manejar el error a qui 
     catchError( err => of('te mamaste ese correo no esta') )
 )



// creando el formulario

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');


// configuraciones
inputEmail.type        = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value       = 'eve.holt@reqres.in';


inputPass.type        = 'password';
inputPass.placeholder = 'Password';
inputPass.value       = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';
//poner en el HTML
form.append( inputEmail,inputPass,submitBtn );
document.querySelector('body').append(form);

//Streams prevenir las cargas para que no se vea feo
const submitForm$ = fromEvent<Event>( form,'submit' )
                    .pipe(
                        tap( ev => ev.preventDefault()),
                        //salida un objeto
                        map( ev => ({
                            email: ev.target[0].value,
                            password: ev.target[1].value
                        })),
                        //elprimer argumento pasara por esta funcion mergemap
                        //mergemap se lanzan todas las peticiones 
                        //mergeMap( peticionHttpLogin )
                        //swichmap lansa al final del intervalo las respuestas elimina las anteriores al dar click actual
                        //switchMap( peticionHttpLogin )
                        //ignora todas peticiones en el intervalo de tiempo
                         exhaustMap( peticionHttpLogin )
                    );

submitForm$.subscribe( token => {
    console.log(token);
}) 

