import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// mostrar html inicio 
const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae neque suscipit, volutpat lorem at, laoreet dolor. Nam augue felis, sollicitudin sed ex ac, pretium porttitor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla tempus orci. Suspendisse aliquet congue sem vitae viverra. Morbi mauris justo, egestas eu convallis sed, malesuada et turpis. Vestibulum scelerisque viverra quam, vel molestie nisl pretium consectetur. Aenean vel arcu et augue consequat convallis ut a ipsum. Nulla euismod tortor quis lectus porttitor, at vestibulum turpis vulputate. Vivamus molestie malesuada auctor. Donec malesuada ligula sapien, nec vestibulum tortor lacinia at. Praesent auctor commodo efficitur. Nunc ac dui at magna egestas pharetra.
<br/><br/>
Proin hendrerit nibh id eros faucibus vestibulum. Duis vel ante eros. Phasellus fringilla tortor sit amet bibendum cursus. Morbi ut nibh nec arcu congue euismod. Aliquam justo arcu, viverra nec elementum at, interdum a ante. Ut eu arcu nec urna vulputate mollis nec vel augue. Curabitur porta risus sapien, quis ultrices ante malesuada in. Nulla sit amet massa porttitor, porttitor dolor imperdiet, fringilla elit. Duis ut semper erat, at gravida diam. Aenean ac felis et erat egestas malesuada fringilla et ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Donec tempus orci libero, vel rutrum libero cursus in. Ut tristique scelerisque ligula, nec tempus justo dapibus ac. Aliquam sit amet placerat eros. Etiam leo urna, luctus venenatis dignissim varius, semper a nunc. Ut pulvinar vestibulum ante, ut mollis nisi placerat nec. Aliquam erat volutpat. Nulla commodo ac lectus ac hendrerit. Proin a dolor porta, tempor lorem vitae, porta risus. Nam viverra vitae libero varius cursus. Duis ut pulvinar enim, quis facilisis justo. Morbi ultricies tellus sapien, sit amet euismod ligula ornare a. Nullam id dapibus enim.
<br/><br/>
Donec mauris mi, tempor a nibh sed, pretium semper dui. Donec eu turpis quis risus malesuada lobortis et id nibh. Donec nec dignissim felis, non rhoncus justo. Ut hendrerit iaculis ante at finibus. Donec fringilla maximus pretium. Aliquam finibus, ante sit amet laoreet ornare, erat orci elementum lectus, quis consequat massa orci vitae ligula. Morbi id dui posuere, pharetra sapien id, auctor lorem. Nunc maximus risus et neque dapibus semper.
<br/><br/>
Ut ut ipsum rhoncus, fermentum orci sed, molestie libero. Pellentesque id erat ullamcorper, commodo leo sed, sodales lorem. Aenean in sodales erat. Phasellus nibh velit, mollis vel iaculis id, laoreet sodales turpis. Aliquam mattis lectus velit, non faucibus mi cursus et. Nunc gravida ligula tincidunt dui fermentum, eu fringilla arcu fermentum. Sed eu eros orci. Duis dictum massa id ante vehicula, sit amet convallis orci viverra. Vestibulum ut sagittis quam, ac auctor quam. In est risus, rutrum sit amet tempus ut, dapibus a tellus. Fusce ac ligula odio. Fusce in quam nec est pulvinar pharetra. Aliquam porttitor pellentesque magna id fringilla. Morbi ultricies tortor vitae ex feugiat, nec suscipit arcu maximus. In auctor convallis magna, ac lobortis dolor sagittis sed. Praesent aliquet tincidunt tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae neque suscipit, volutpat lorem at, laoreet dolor. Nam augue felis, sollicitudin sed ex ac, pretium porttitor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla tempus orci. Suspendisse aliquet congue sem vitae viverra. Morbi mauris justo, egestas eu convallis sed, malesuada et turpis. Vestibulum scelerisque viverra quam, vel molestie nisl pretium consectetur. Aenean vel arcu et augue consequat convallis ut a ipsum. Nulla euismod tortor quis lectus porttitor, at vestibulum turpis vulputate. Vivamus molestie malesuada auctor. Donec malesuada ligula sapien, nec vestibulum tortor lacinia at. Praesent auctor commodo efficitur. Nunc ac dui at magna egestas pharetra.
<br/><br/>
Proin hendrerit nibh id eros faucibus vestibulum. Duis vel ante eros. Phasellus fringilla tortor sit amet bibendum cursus. Morbi ut nibh nec arcu congue euismod. Aliquam justo arcu, viverra nec elementum at, interdum a ante. Ut eu arcu nec urna vulputate mollis nec vel augue. Curabitur porta risus sapien, quis ultrices ante malesuada in. Nulla sit amet massa porttitor, porttitor dolor imperdiet, fringilla elit. Duis ut semper erat, at gravida diam. Aenean ac felis et erat egestas malesuada fringilla et ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Donec tempus orci libero, vel rutrum libero cursus in. Ut tristique scelerisque ligula, nec tempus justo dapibus ac. Aliquam sit amet placerat eros. Etiam leo urna, luctus venenatis dignissim varius, semper a nunc. Ut pulvinar vestibulum ante, ut mollis nisi placerat nec. Aliquam erat volutpat. Nulla commodo ac lectus ac hendrerit. Proin a dolor porta, tempor lorem vitae, porta risus. Nam viverra vitae libero varius cursus. Duis ut pulvinar enim, quis facilisis justo. Morbi ultricies tellus sapien, sit amet euismod ligula ornare a. Nullam id dapibus enim.
<br/><br/>
Donec mauris mi, tempor a nibh sed, pretium semper dui. Donec eu turpis quis risus malesuada lobortis et id nibh. Donec nec dignissim felis, non rhoncus justo. Ut hendrerit iaculis ante at finibus. Donec fringilla maximus pretium. Aliquam finibus, ante sit amet laoreet ornare, erat orci elementum lectus, quis consequat massa orci vitae ligula. Morbi id dui posuere, pharetra sapien id, auctor lorem. Nunc maximus risus et neque dapibus semper.
<br/><br/>
Ut ut ipsum rhoncus, fermentum orci sed, molestie libero. Pellentesque id erat ullamcorper, commodo leo sed, sodales lorem. Aenean in sodales erat. Phasellus nibh velit, mollis vel iaculis id, laoreet sodales turpis. Aliquam mattis lectus velit, non faucibus mi cursus et. Nunc gravida ligula tincidunt dui fermentum, eu fringilla arcu fermentum. Sed eu eros orci. Duis dictum massa id ante vehicula, sit amet convallis orci viverra. Vestibulum ut sagittis quam, ac auctor quam. In est risus, rutrum sit amet tempus ut, dapibus a tellus. Fusce ac ligula odio. Fusce in quam nec est pulvinar pharetra. Aliquam porttitor pellentesque magna id fringilla. Morbi ultricies tortor vitae ex feugiat, nec suscipit arcu maximus. In auctor convallis magna, ac lobortis dolor sagittis sed. Praesent aliquet tincidunt tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae neque suscipit, volutpat lorem at, laoreet dolor. Nam augue felis, sollicitudin sed ex ac, pretium porttitor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla tempus orci. Suspendisse aliquet congue sem vitae viverra. Morbi mauris justo, egestas eu convallis sed, malesuada et turpis. Vestibulum scelerisque viverra quam, vel molestie nisl pretium consectetur. Aenean vel arcu et augue consequat convallis ut a ipsum. Nulla euismod tortor quis lectus porttitor, at vestibulum turpis vulputate. Vivamus molestie malesuada auctor. Donec malesuada ligula sapien, nec vestibulum tortor lacinia at. Praesent auctor commodo efficitur. Nunc ac dui at magna egestas pharetra.
<br/><br/>
Proin hendrerit nibh id eros faucibus vestibulum. Duis vel ante eros. Phasellus fringilla tortor sit amet bibendum cursus. Morbi ut nibh nec arcu congue euismod. Aliquam justo arcu, viverra nec elementum at, interdum a ante. Ut eu arcu nec urna vulputate mollis nec vel augue. Curabitur porta risus sapien, quis ultrices ante malesuada in. Nulla sit amet massa porttitor, porttitor dolor imperdiet, fringilla elit. Duis ut semper erat, at gravida diam. Aenean ac felis et erat egestas malesuada fringilla et ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Donec tempus orci libero, vel rutrum libero cursus in. Ut tristique scelerisque ligula, nec tempus justo dapibus ac. Aliquam sit amet placerat eros. Etiam leo urna, luctus venenatis dignissim varius, semper a nunc. Ut pulvinar vestibulum ante, ut mollis nisi placerat nec. Aliquam erat volutpat. Nulla commodo ac lectus ac hendrerit. Proin a dolor porta, tempor lorem vitae, porta risus. Nam viverra vitae libero varius cursus. Duis ut pulvinar enim, quis facilisis justo. Morbi ultricies tellus sapien, sit amet euismod ligula ornare a. Nullam id dapibus enim.
<br/><br/>
Donec mauris mi, tempor a nibh sed, pretium semper dui. Donec eu turpis quis risus malesuada lobortis et id nibh. Donec nec dignissim felis, non rhoncus justo. Ut hendrerit iaculis ante at finibus. Donec fringilla maximus pretium. Aliquam finibus, ante sit amet laoreet ornare, erat orci elementum lectus, quis consequat massa orci vitae ligula. Morbi id dui posuere, pharetra sapien id, auctor lorem. Nunc maximus risus et neque dapibus semper.
<br/><br/>
Ut ut ipsum rhoncus, fermentum orci sed, molestie libero. Pellentesque id erat ullamcorper, commodo leo sed, sodales lorem. Aenean in sodales erat. Phasellus nibh velit, mollis vel iaculis id, laoreet sodales turpis. Aliquam mattis lectus velit, non faucibus mi cursus et. Nunc gravida ligula tincidunt dui fermentum, eu fringilla arcu fermentum. Sed eu eros orci. Duis dictum massa id ante vehicula, sit amet convallis orci viverra. Vestibulum ut sagittis quam, ac auctor quam. In est risus, rutrum sit amet tempus ut, dapibus a tellus. Fusce ac ligula odio. Fusce in quam nec est pulvinar pharetra. Aliquam porttitor pellentesque magna id fringilla. Morbi ultricies tortor vitae ex feugiat, nec suscipit arcu maximus. In auctor convallis magna, ac lobortis dolor sagittis sed. Praesent aliquet tincidunt tristique.
`;

const body = document.querySelector('body');
body.append ( texto );
// mostrar html final 
//mostrar barra
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append ( progressBar );
//final de mostrar barra

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement; 
    //clenthiegth 692
    //scrolheigth 1144
    //scrolltop 99
   return(scrollTop / (scrollHeight - clientHeight) ) * 100;
}

//srreeams
const scroll$ = fromEvent( document, 'scroll');
//scroll$.subscribe(console.log)
const progress$ = scroll$.pipe(
    //map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap(console.log)
);

progress$.subscribe(porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

})
