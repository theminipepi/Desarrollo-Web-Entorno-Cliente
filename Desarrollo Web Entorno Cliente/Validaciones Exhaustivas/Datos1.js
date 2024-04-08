window.onload = inicio;

function inicio(){
    document.formulario.onsubmit=validar;
}

function validar(){
    let enviar=true;
    let primerValor = document.formulario.dato1.value;
    let segundoValor = document.formulario.dato2.value;
    let tercerValor = document.formulario.dato3.value;
    let mensaje = " ";
    if(!validarDatos(primerValor)){
        enviar = false;
        mensaje += "Error en la caja de texto de Primer valor, Dato no válido \n";
    }
    if(!validarDatos1(segundoValor)){
        enviar = false;
        mensaje += "Error en la caja de texto de Segundo valor, Dato no válido \n";
    }
    if(!<label for="valor">Segundo dato</label>
    <input type="text" name="dato2" /> <br />(tercerValor)){
        enviar = false;
        mensaje += "Error en la caja de texto de Tercer valor, Dato no válido \n";
    }
    if(!enviar){
        alert(mensaje);
    }

    return enviar;
}

/*
    Empieza por dos letras, termina por un aletra o un punto y en medio puede tener letras,
    digitos y los caracteres "-", ".", "\" y "%", con una longitud comprendedida entre
    6 y 30 caracteres.
*/
function validarDatos(dato){
    let correcto = true;
    let indice = 0;
    dato = dato.trim().toLowerCase();
    if(dato.length < 6 || dato.length > 30){
        correcto = false;
    }else{
        let adicionales = "áéíóúüñ";
        while (correcto && indice < 2){
            if(dato.at(indice) < "a" || dato.at(indice) > "z"){
                if(!adicionales.includes(dato.at(indice))){
                    correcto = false;
                }
            }
            indice +=1;
        }
        let letra = dato.at(dato.length - 1);
        if(letra < "a" || letra > "z"){
            if(!adicionales.includes(dato.at(letra))){
                if(letra != "."){
                    correcto = false;
                }
            }
        }
        indice = 2;
        let mas = "-.\%";
        while (correcto && indice < dato.length - 1){
            if(dato.at(indice) < "a" || dato.at(indice) > "z"){
                if(!adicionales.includes(dato.at(indice))){
                    if(!mas.includes(dato.at(indice))){
                        if(dato.at(indice)< "0" || dato.at(indice) > "9"){
                            correcto = false;
                        }
                        
                    }
                    
                }
            }
            indice +=1;
        }
    }

    return correcto;
}

/*
    Empieza por dos letras, termina por tres caracteres que pueden ser letras o un punto y en medio puede tener letras,digitos y los caracteres "-", ".", "\" y "%", con una longitud comprendedida entre
    6 y 30 caracteres.
*/

function validarDatos1(dato){
    let correcto = true;
    let indice = 0;
    dato = dato.trim().toLowerCase();
    if(dato.length < 6 || dato.length > 30){
        correcto = false;
    }else{
        let adicionales = "áéíóúüñ";
        while (correcto && indice < 2){
            if(dato.at(indice) < "a" || dato.at(indice) > "z"){
                if(!adicionales.includes(dato.at(indice))){
                    correcto = false;
                }
            }
            indice +=1;
        }
        indice = dato.length - 3;
        while(correcto && indice < dato.length){
            if(dato.at(indice) < "a" || dato.at(indice) > "z"){
                if(!adicionales.includes(dato.at(indice))){
                    if(dato.at(indice) != "."){
                        correcto = false;
                    }
                }
            }
            indice +=1;
        }
        
        indice = 2;
        let mas = "-.\%";
        while (correcto && indice < dato.length - 3){
            if(dato.at(indice) < "a" || dato.at(indice) > "z"){
                if(!adicionales.includes(dato.at(indice))){
                    if(!mas.includes(dato.at(indice))){
                        if(dato.at(indice)< "0" || dato.at(indice) > "9"){
                            correcto = false;
                        }
                        
                    }
                    
                }
            }
            indice +=1;
        }
    }

    return correcto;

}
function validarDatos2(dato){
    /*
        3 letras
        2 caracteres "+", "-","/"
        5 letras o dígitos
        1 caracter "%", "$", "&"
        cadena "ser", "es", "esta"
        4 caracteres: letras, dígitos, ".", "-"
    */
   let correcto = true;
   let indice = 0;
   dato = dato.trim().toLowerCase();
   if(dato.length < 17 || dato.length > 19){
    correcto = false;
   }else{
    let adicionales = "áéíóúüñ";
    while(correcto && indice < 3){
        if(dato.at(indice) < "a" || dato.at(indice) > "z"){
            if(!adicionales.includes(dato.at(indice))){
                correcto = false;
            }
        }
        indice +=1;
    }
    let mas = "+-/";
    while(correcto && indice < 5){
        if(!mas.includes(dato.at(indice))){
            correcto = false;
        }
        indice +=1;
    }
    while(correcto && indice < 10){
        if(dato.at(indice) < "a" || dato.at(indice) > "z"){
            if(!adicionales.includes(dato.at(indice))){
                if(dato.at(indice) < "0" || dato.at(indice) > "9"){
                    correcto = false;
                }
            }
        }
        indice +=1;
    }
    let otros="%$&";
    indice = 10;
    if(!otros.includes(indice)){
        correcto = false;
    }
    indice +=1;
    let palabra = dato.substring(11, dato.length - 4);
    let lasPalabras = ["ser", "es", "esta"];
    if(!lasPalabras.includes(palabra)){
        correcto = false;
    }
    indice = dato.length - 4;
    let signos = ".-";
    while(correcto && indice < dato.length){
        if(dato.at(indice) < "a" || dato.at(indice) > "z"){
            if(!adicionales.includes(dato.at(indice))){
                if(dato.at(indice) < "0" || dato.at(indice) > "9"){
                    if(!signos.includes(indice)){
                        correcto = false;
                    }
                }
            }
        }
        indice +=1;
    }

   }

   return correcto;
   
}