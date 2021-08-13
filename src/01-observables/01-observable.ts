import {Observable, Observer} from 'rxjs';

//Es una interface objeto para poner el subscribe 
const observer: Observer<any> = {
    next    : value => console.log('siguiente [next]:', value),
    error   : error => console.warn('error [obs]', error),
    complete: () => console.info('completador [obs]')
};


// const obs$ = Observable.create();
const obs$ = new Observable(subs =>{
    //como imprimir los obserbables con 
    //subs.next('Hola');
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //disparar el error para ver el eror del subscribe
    // // const a = undefined;
    // // a.nombre = "Mario"

    //como dejar de emitir despues deste codigo no se mandara ya nada 
    //subs.complete();
    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

});
// //primera forma 
// obs$.subscribe(console.log);

// //segunda forma
// obs$.subscribe(resp => {
//     console.log(resp);
// });

//tercera se pone next por que es el que esta emitiendo ya que solo es un referecia es oslo un string
// obs$.subscribe(
//     //mandar el valor 
//     valor => console.log('next: ' , valor),
//     //mandar el error
//     error => console.warn('error:', error),
//     //y mandar el completo que hace mach con el subs.complete()
//     () => console.info('completado')
// );

//cuarta definiendolo como un objeto 

obs$.subscribe(observer);





