import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, mergeMap, pluck, switchMap } from 'rxjs/operators';
import { GithunUser } from '../interfaces/github-user.interfaces';
import { GithubUsersResp } from '../interfaces/github-users.interfaces';

// REFERENCIAS
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput,orderList);

//Helpers funciones para mostrarlo
const mostrarUsuarios = (usuarios: GithunUser[] ) =>{
    console.log(usuarios);
    orderList.innerHTML = '';

    for(const usuario of usuarios){
        //le desimos que cree un li
        const li = document.createElement('li');
        //desimos que agrege una imagen
        const img = document.createElement('img');
        //que carge el avatarurl que biene dela interface
        img.src = usuario.avatar_url;
        //que cree elnzaes 
        const anchor = document.createElement('a');

        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '  ')
        li.append( anchor );

        orderList.append(li);


    }
}



//Streams
const input$ = fromEvent<KeyboardEvent>(textInput , 'keyup');

input$.pipe(
    //el tiempo de respuesta en gurdar los datos
    debounceTime<KeyboardEvent>(500),
    //accede al target, y saca los value de lo que escribimos
    //segundo argumento es la salida que es un string
    pluck<KeyboardEvent, string>('target','value'),
    //se quieta el return por que es lo unico que se mandara 
    mergeMap<string , Observable<GithubUsersResp>>( texto =>  ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
 
    //pluck solo sacara en este caso el items 
    pluck<GithubUsersResp,GithunUser[]>('items')
    //a este punto da un obserbable y en este caso no tendriamos que subcribir al mismo obserbable
);
//.subscribe( mostrarUsuarios );
//el uno es un delay de un segundo y lo que sige es el argumento
const url = 'https://httpbin.org/delay/1?arg='; // + mario o lo que pongamos en el input

input$.pipe(
    pluck('target','value'),
    //switchmap crea la trasformacion del subcribe toma balores de los intervalos pero los elimina
    //y se que da con la ultima salida en este caso o despues del dlay de un 1sec 
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)