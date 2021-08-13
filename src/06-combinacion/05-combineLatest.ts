import { combineLatest, fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// combineLatest( keyup$.pipe(pluck('type')),
//                 click$.pipe(pluck('type')) 
//        ).subscribe(console.log)


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder =  '********'
input2.type = 'password'

document.querySelector('body').append(input1,input2);

//helper ayudas
const getInputstream = (elem: HTMLElement) => 
     fromEvent<KeyboardEvent>(elem,'keyup').pipe(
        pluck<KeyboardEvent,string>('target','value')
    )

//es la conbinacion de dos obserbables y si no estan los dos no los manda 
combineLatest(
    getInputstream(input1),
    getInputstream(input2),

).subscribe(console.log)