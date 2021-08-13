import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";

//Rferencia
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';


const body = document.querySelector('body');

//Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    //starWith se manda en true para mostrar el cargando cuando pasa a false se quieta 
    startWith(true)
)
.subscribe(resp => {
    if(resp == true){
        body.append( loadingDiv )
    }else{
        //ya que sea flaso eliminar
        document.querySelector('.loading').remove()
    }
    console.log(resp);
})