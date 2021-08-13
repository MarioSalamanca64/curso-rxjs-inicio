import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
import { GithunUser } from '../interfaces/github-user.interfaces';
import { GithubUsersResp } from '../interfaces/github-users.interfaces';

//TODAS ESTAS CON APLICACIONES DE APLANAMIENTO OSEA QUE SESUSBRIBEN TODAS SIN TENER QUE SUBCRIBIRNOS YA NO DAN 
//LOS DATOS YA TRASFORMADOS

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
    //map cambia los valores a otra salida este map lo vuelve otro obserbable
    //se quieta el return por que es lo unico que se mandara 
    map<string , Observable<GithubUsersResp>>( texto =>  ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
    //mergeAll se suscribira a los subcriber que estan en la funcion
    mergeAll<GithubUsersResp>(),
    //pluck solo sacara en este caso el items 
    pluck<GithubUsersResp,GithunUser[]>('items')
    //a este punto da un obserbable y en este caso no tendriamos que subcribir al mismo obserbable
).subscribe( mostrarUsuarios );