window.onload = comienzo;

function comienzo(){
    let VsResuelto=" ";
    let VinCont = 0;
    let VitNum=1;

    while (VinCont <= 100){
        if(numerosPrimos(VitNum)){
            VsResuelto += VitNum.toString()+"|";
            VinCont++;
        }

        VitNum+=1;
    }    
    document.formulario.textarea.value = VsResuelto;
}
function (numero){
    let vboPrimo=true;
    for(let VitIndice=2;VitIndice < numero ; VitIndice++)
        if(numero % VitIndice == 0)
            vboPrimo=false;
    
    return vboPrimo;
    
}