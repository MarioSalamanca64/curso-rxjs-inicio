import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';
//ajax.getJSON se usa para obterner informacion de la api y en segundo argumento podemos mandar heders para tokens etc
const obs$ = ajax.getJSON( url,{
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe( data => console.log('data:', data))