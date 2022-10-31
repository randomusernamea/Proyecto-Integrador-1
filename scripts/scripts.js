


noticias = document.getElementsByClassName('noticia');
noticias[0].style.gridArea = '1 / 2 / span 1 / span 1';
noticias[0].style.margin = '0 auto';

noticias[1].style.gridArea = '1 / 3 / span 1 / span 1';
noticias[1].style.margin = '0 auto';

noticias[2].style.gridArea = '1 / 4 / span 1 / span 1';
noticias[2].style.margin = '0 auto';

noticias[3].style.gridArea = '1 / 5 / span 1 / span 1';
noticias[3].style.margin = '0 auto';

noticias[4].style.visibility = "hidden";
noticias[4].style.margin = '0 auto';

noticias[5].style.visibility = "hidden";
noticias[5].style.margin = '0 auto';


noticiasDivFecha = document.getElementsByClassName('noticiaFecha');

let i = 0;
while (i<noticiasDivFecha.length){
    agregarTiempoDesde(noticiasDivFecha[i]);
    i++;
}

function agregarTiempoDesde(element){
    fecha = element.getElementsByClassName('noticiaFechaTexto')
    tiempoDesde = element.getElementsByClassName('noticiaTiempoDesdeSubido');
    aux = timeSince(fecha[0].innerText);
    aux = parseInt(aux/1000);
    if (aux < 60){
        aux = aux + 'Segundos'
    }
    else {
        aux = parseInt(aux/60);
        if (aux < 60){
            aux = aux + 'Minutos';
        }
        else {
            aux = parseInt(aux/60);
            if (aux < 24){
                aux = aux + 'Horas';
            }
            else {
                aux = parseInt(aux/24);
                aux = aux + 'Dias';
            }
        }
    }

    tiempoDesde[0].innerText = aux;
}

function timeSince(date) {
    aux = new Date();
    aux2 = new Date(date);
    toReturn = aux-aux2;
    return toReturn;
}