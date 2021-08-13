import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');
//pudes meter varios obserbables y mandara su valor conbinado asta que acaben los dos 
merge( keyup$.pipe(pluck('type')),
       click$.pipe(pluck('type')) ).subscribe(console.log)