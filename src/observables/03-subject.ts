import {  observable, Observable, Observer, Subject,  } from 'rxjs';

//Es una interface objeto para poner el subscribe 
const observer: Observer<any> = {
    next    : value => console.log('next', value),
    error   : error => console.warn('error', error),
    complete: () => console.info('completador')
};

const intervalos$ = new Observable( subs => {
    const intercalD =  setInterval(
        () => subs.next( Math.random( )), 
        1000);

    return () => {
        clearInterval( intercalD );
        console.log('intervalo destruido');
    ;}
});
/*
cosas que podemos hacer con SUbject()
1- Casteo multiple muchas subcripciones va estar en lazados y distrubuir la la misma informacion alos mismos
2- tanbien es un observer osea que tiene la estructura de tres next error complete
3- tanbien maneja loq ue es next error y complate
*/ 

const subject$ = new Subject();
const subscrition = intervalos$.subscribe( subject$ );

//en este caso se subcribe pero da el mismo resultado observer es dela interfas
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


//hace dos subcribe pero de diferente numeros y no usa el subject
// const subs1 = intervalos$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalos$.subscribe(rnd => console.log('subs2', rnd));

/*cuando la data es producida por el observable;e se considera un "cold observable"
pero cuando la data esta afuera es llamado "hot obserbable" en este caso el sunjet$ es hot*/

//terminar la ejecucion del subjet$
setTimeout(() => {

    subject$.next(10);

    subject$.complete();
    //te desuscribes de subject$
    subscrition.unsubscribe();

},3500);

//video 19