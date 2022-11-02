

document.getElementById('ingresarButton').onclick =function() {ingresarAbrir()};
document.getElementById('ingresarDivCerrar').onclick = function(){ingresarCerrar()};

function ingresarAbrir(){
    darkener = document.getElementById('screenDarkener')
    darkener.style.visibility = "visible";
    darkener.style.zIndex = '1';
    ingresarMain = document.getElementById('ingresarDiv');
    ingresarMain.style.visibility = "visible";
    ingresarMain.style.zIndex = '3';
    
}

function ingresarCerrar(){
    darkener = document.getElementById('screenDarkener')
    darkener.style.visibility = "hidden";
    darkener.style.zIndex = '-1000';
    ingresarMain = document.getElementById('ingresarDiv');
    ingresarMain.style.visibility = "hidden";
    ingresarMain.style.zIndex = '-1000';
}



initializeNoticias();

function initializeNoticias(){
    if (document.documentElement.clientWidth> 500){
        noticias = document.getElementsByClassName('noticia');
        agregarFechas();
        noticias[0].style.visibility = "visible";
        noticias[0].style.gridArea = '1 / 2 / span 1 / span 1';
        noticias[0].style.margin = '0 auto';

        noticias[1].style.visibility = "visible";
        noticias[1].style.gridArea = '1 / 3 / span 1 / span 1';
        noticias[1].style.margin = '0 auto';

        noticias[2].style.gridArea = '1 / 4 / span 1 / span 1';
        noticias[2].style.margin = '0 auto';

        noticias[3].style.gridArea = '1 / 5 / span 1 / span 1';
        noticias[3].style.margin = '0 auto';

        noticias[4].style.visibility = "hidden";
        noticias[4].style.gridArea = '1 / 6 / span 1 / span 1';
        noticias[4].style.margin = '0 auto';

        noticias[5].style.visibility = "hidden";
        noticias[5].style.gridArea = '1 / 0 / span 1 / span 1';
        noticias[5].style.margin = '0 auto';
    }
    document.getElementById('button1').onclick =function() {switchNoticias(1)};
document.getElementById('button2').onclick =function() {switchNoticias(2)};
document.getElementById('button3').onclick =function() {switchNoticias(3)};
}

function agregarFechas(){
    noticiasDivFecha = document.getElementsByClassName('noticiaFecha');

    let i = 0;
    while (i<noticiasDivFecha.length){
        agregarTiempoDesde(noticiasDivFecha[i]);
        i++;
    }
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




function switchNoticias(number){
    noticias = document.getElementsByClassName('noticia');
    if (number == 1){

        noticias[0].style.visibility = "visible";
        noticias[0].style.gridArea = '1 / 2 / span 1 / span 1';
        noticias[0].style.margin = '0 auto';

        noticias[1].style.visibility = "visible";
        noticias[1].style.gridArea = '1 / 3 / span 1 / span 1';
        noticias[1].style.margin = '0 auto';

        noticias[2].style.gridArea = '1 / 4 / span 1 / span 1';
        noticias[2].style.margin = '0 auto';

        noticias[3].style.gridArea = '1 / 5 / span 1 / span 1';
        noticias[3].style.margin = '0 auto';

        noticias[4].style.visibility = "hidden";
        noticias[4].style.gridArea = '1 / 6 / span 1 / span 1';
        noticias[4].style.margin = '0 auto';

        noticias[5].style.visibility = "hidden";
        noticias[5].style.gridArea = '1 / 0 / span 1 / span 1';
        noticias[5].style.margin = '0 auto';
    }
    if (number == 2){

        noticias[0].style.visibility = "hidden";
        noticias[0].style.gridArea = '1 / 1 / span 1 / span 1';
        noticias[0].style.margin = '0 auto';

        noticias[1].style.visibility = "visible";
        noticias[1].style.gridArea = '1 / 2 / span 1 / span 1';
        noticias[1].style.margin = '0 auto';

        noticias[2].style.gridArea = '1 / 3 / span 1 / span 1';
        noticias[2].style.margin = '0 auto';

        noticias[3].style.gridArea = '1 / 4 / span 1 / span 1';
        noticias[3].style.margin = '0 auto';

        noticias[4].style.visibility = "visible";
        noticias[4].style.gridArea = '1 / 5 / span 1 / span 1';
        noticias[4].style.margin = '0 auto';

        noticias[5].style.visibility = "hidden";
        noticias[5].style.gridArea = '1 / 6 / span 1 / span 1';
        noticias[5].style.margin = '0 auto';
    }
    if (number == 3){
        noticias[0].style.visibility = "hidden";
        noticias[0].style.gridArea = '1 / 6 / span 1 / span 1';
        noticias[0].style.margin = '0 auto';

        noticias[1].style.visibility = "hidden";
        noticias[1].style.gridArea = '1 / 1 / span 1 / span 1';
        noticias[1].style.margin = '0 auto';

        noticias[2].style.gridArea = '1 / 2 / span 1 / span 1';
        noticias[2].style.margin = '0 auto';

        noticias[3].style.gridArea = '1 / 3 / span 1 / span 1';
        noticias[3].style.margin = '0 auto';

        noticias[4].style.visibility = "visible";
        noticias[4].style.gridArea = '1 / 4 / span 1 / span 1';
        noticias[4].style.margin = '0 auto';

        noticias[5].style.visibility = "visible";
        noticias[5].style.gridArea = '1 / 5 / span 1 / span 1';
        noticias[5].style.margin = '0 auto';
    }
}
