window.onload = comienzo;

function comienzo(){
    let VsResuelto=" ";
    for(let VIntindice=1;VIntindice<=100;VIntindice++){
        if(numerosPrimos(VIntindice))
                VsResuelto += VIntindice.toString()+"|";

    document.formulario.textarea.value = VsResuelto;
    }      
}
function numerosPrimos(numero){
    let vboPrimo=true;
    for(let VitIndice=2;VitIndice < numero ; VitIndice++)
        if(numero % VitIndice == 0)
            vboPrimo=false;
    
    return vboPrimo;
    
}
