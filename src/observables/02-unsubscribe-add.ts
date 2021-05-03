import {Observable, Observer, Subscriber} from 'rxjs';

//Es una interface objeto para poner el subscribe 
const observer: Observer<any> = {
    next    : value => console.log('siguiente', value),
    error   : error => console.warn('error', error),
    complete: () => console.info('completador')
};

const intervalos$ = new Observable<number>( subscriber => {

    //Crear un contador, 1,2,3,4,5,6
    let count = 0;
    
    // setInterval hace que tenga un contador infinito
    const interval =  setInterval(() => {
        //cada segundo 
        count++;
        subscriber.next( count );
        console.log(count)
    },1000);

    //estamos llamando la 3 parte de unestra interfas para ver si se cumple llege al return
    setTimeout(() => {
        subscriber.complete()
    },2500);

    //los obserbables tanbien cuentan con un return para poder eliminar el Interval
    return () => {
        clearInterval(interval);
        console.log('Intervalo Destruido')
    }
});
//observer es la interfas
const subs1 = intervalos$.subscribe( observer );
const subs2 = intervalos$.subscribe( observer );
const subs3 = intervalos$.subscribe( observer );

//encadenar subscribe
subs1.add(subs2)
     .add(subs3);

//setTimeout espara detener el conteo js
//subs.unsubcriber es para detener las subscripcion type
setTimeout(() => {
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado timeout')
},3000);

