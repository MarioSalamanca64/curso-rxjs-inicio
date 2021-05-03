import { asyncScheduler } from 'rxjs';

// estas dos se pueden hacer con el asyncScheduler
// setTimeout(()=>{},3000)
// setInterval(()=>{},3000)

const saludar = () => console.log('hola mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`)

//llamar de forma sensilla 
//asyncScheduler.schedule(saludar,2000);
//aqui le mandamos un argumento 
//no se puede mandar dos argumentos solo si es un objeto
//asyncScheduler.schedule(saludar2, 2000, 'Mario');

//crear el set Timeout no puede ser una funcion de flecha

//este es un interval
const subs = asyncScheduler.schedule( function(state){

    console.log('state',state);

    this.schedule( state + 1, 1000);

    //lasegunda come puede ser un areglo un objeto
}, 3000, 0 );

/*setTimeout(() => {
    subs.unsubscribe();
}, 6000)*/
//lo mismo setTimeout pero con asycScheduler
asyncScheduler.schedule( () => subs.unsubscribe(),6000 )