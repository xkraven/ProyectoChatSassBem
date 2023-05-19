let cambiarFuenteCursiva= ()=>{

     
    let elDiv = document.getElementsByClassName('principal__derecha');
    console.log(elDiv);
    elDiv[0].setAttribute('class', 'principal__derecha--cursiva');

    // la clase principal__derecha__boton tiene dos elementos
    // en la posicion cero esta el boton que cambia a cursiva
    // en la posicion uno esta el boton que cambia a orbitron
    let elBoton = document.getElementsByClassName('principal__derecha__boton');

    console.log(elBoton);
    
    // identificamos el boton que cambia a orbitron, y lo habilitamos
    elBoton[1].disabled = false;
    // identificamos el boton que cambia a cursiva, y lo deshabilitamos
    elBoton[0].disabled = true;

}


let cambiarFuenteOrbitron= ()=>{

     
    let elDiv = document.getElementsByClassName('principal__derecha--cursiva');
    console.log(elDiv);
    elDiv[0].setAttribute('class', 'principal__derecha');


        // la clase principal__derecha__boton tiene dos elementos
    // en la posicion cero esta el boton que cambia a cursiva
    // en la posicion uno esta el boton que cambia a orbitron
    let elBoton = document.getElementsByClassName('principal__derecha__boton');
    
    // identificamos el boton que cambia a orbitron, y lo deshabilitamos
    elBoton[1].disabled = true;
    // identificamos el boton que cambia a cursiva, y lo habilitamos
    elBoton[0].disabled = false;

}



let mostrarContenedoresChat= ()=>{
    let losChats = document.getElementsByClassName('principal__izquierda__contenedortextoIzquierda');
    let estado = losChats[0].style.display;

    if(estado == 'inherit'){
        for(let i=0; i < losChats.length; i++){
            losChats[i].style.display = 'none';
        }
    }
    else{
        for(let i=0; i < losChats.length; i++){
            losChats[i].style.display = 'inherit';
        }
    }

}



let mostrarMenuPagina= ()=>{

    let elContenedor = document.getElementsByClassName('cabecera__contenedorLista');
    let estadoContenedor = elContenedor[0].style.display;

    let elBotonChats = document.getElementsByClassName('principal__izquierda__mostrarChats__boton');
    if(estadoContenedor == 'block'){
        elContenedor[0].style.display = 'none';
        elBotonChats[0].style.top = '30px';
    }
    else{
        elContenedor[0].style.display = 'block';
        elBotonChats[0].style.top = '200px';
    }


}