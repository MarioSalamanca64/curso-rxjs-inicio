import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    //sirve para emitir valores despendiendo del tiempo que poenes y elimina todos los demas que no esten en el 
    //tiempo que le pones
    throttleTime(3000)
)//.subscribe(console.log)


const input  = document.createElement('input');
document.querySelector('body').append(input)


const input$ = fromEvent(input,'keyup');

 input$.pipe(
     //asyncScheduler mandar dos argumentos solo si es un objeto
    throttleTime(400, asyncScheduler,{
        //que asepte el primer termino y el ultimo cuando se deja de escribir
       leading:true,
       trailing:true 
    }),
     //pluck llamar los datos del evento keyup q esta en target-value
     pluck('target', 'value'),
     //distinctUntilChanged para que no se repitan muchas veces 
     distinctUntilChanged()
 ).subscribe(console.log);