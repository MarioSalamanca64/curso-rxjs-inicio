import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}
//puedes decidir enq ue momento mandar un notificacion con el time
//cada que se actualize el navegador se mandara ya que no esta guardado en el localstorage
const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 ); //agregando 5 segundos

//interval es para contar pero entre los intervalos de cada que pone un numero esta en tre el; ellos
const interval$ = interval(1000);

//timer se queda con cada elemento creado y tiene un fin en este caso como es 0 pondria 0 y pasaria al complete despues de 2sg
//pero aun asi es asincrono sebe al final de los dos console log
//const timer$    = timer(2000);

//en este caso seria automatico la llamada
// const timer$ = timer(0);

//cada 2sg emite un numero que va en asenso (inicia en la secuencia cada 1sg despues de 2sg)
const timer$ = timer( hoyEn5 ); //agregar la toficacion 

//console.log para demostrar que son asincronos
console.log('inicio');
// interval$.subscribe( observer );
timer$.subscribe(observer);
console.log('fin');