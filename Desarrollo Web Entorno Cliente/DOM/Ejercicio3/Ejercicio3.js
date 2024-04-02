if(document.addEventListener){
    window.addEventListener("load",inicio);
}else if(document.attachEvent){
    window.attachEvent("onload",inicio);
}

function inicio(){
    let boton = document.getElementById("hacer");
    if(document.addEventListener){
        boton.addEventListener("click",procesar);
    }else if(document.attachEvent){
        boton.attachEvent("onclick",procesar);
    }
}

function procesar(){
    let com = document.getElementById("comu").value.trim();
    let pro = document.getElementById("prov").value.trim();
    let hab = document.getElementById("habit").value.trim();
    if(com!="" && hab!=""){
        let padre = document.querySelector("#tabla>tbody");
        let filas = padre.getElementsByTagName("tr");
        let indice = 0;
        let ausente = true;
        while(ausente && indice < filas.length){
            let celdas = filas.item(indice).getElementsByTagName("td");
            if(com == celdas.item(0).textContent){
                
                if(pro==celdas.item(1).textContent){
                    ausente = false;
                }else if(pro>celdas.item(1).textContent){
                    ausente=false;
                    let nuevafila = document.createElement("tr");
                    let comnueva = document.createElement("td");
                    let habnueva = document.createElement("td");
                    let pronueva = document.createElement("td");
                    let comvalor = document.createTextNode(com);
                    let habvalor = document.createTextNode(hab);
                    let provalor = document.createTextNode(pro);
                    comnueva.append(comvalor);
                    habnueva.append(habvalor);
                    pronueva.append(provalor);
                    nuevafila.append(comnueva);
                    nuevafila.append(pronueva);
                    nuevafila.append(habnueva);
                    filas.item(indice).before(nuevafila);
                }

            }else if(com < celdas.item(0).textContent){
                ausente =false;
                let nuevafila = document.createElement("tr");
                let comnueva = document.createElement("td");
                let habnueva = document.createElement("td");
                let pronueva = document.createElement("td");
                let comvalor = document.createTextNode(com);
                let habvalor = document.createTextNode(hab);
                let provalor = document.createTextNode(pro);
                comnueva.append(comvalor);
                habnueva.append(habvalor);
                pronueva.append(provalor);
                nuevafila.append(comnueva);
                nuevafila.append(pronueva);
                nuevafila.append(habnueva);
                filas.item(indice).before(nuevafila);
            }
            indice +=1;
        }

        if(ausente){
            let nuevafila = document.createElement("tr");
            let comnueva = document.createElement("td");
            let habnueva = document.createElement("td");
            let pronueva = document.createElement("td");
            let comvalor = document.createTextNode(com);
            let habvalor = document.createTextNode(hab);
            let provalor = document.createTextNode(pro);
            comnueva.append(comvalor);
            habnueva.append(habvalor);
            pronueva.append(provalor);
            nuevafila.append(comnueva);
            nuevafila.append(pronueva);
            nuevafila.append(habnueva);
            padre.append(nuevafila);
        }

    }
}