        import { of } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';


const numeros$ = of(1,2,3).pipe(
    //pondria el valor al principio del obserber 
    startWith('a','b','c'),
    //agregar el valor al ultimo del obserbable
    endWith('x','y','z')
);


numeros$.subscribe(console.log)