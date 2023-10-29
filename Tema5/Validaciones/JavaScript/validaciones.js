window.onload = inicio;

function inicio() {
  document.formulario.boton.onclick = comenzar;
}

function comenzar() {
  Vstmensaje = " ";
  inputText = document.formulario.esNifesCif.value;
  esNifesCif(inputText);
  CodigosControl(codBanco,numSucursal,numCuenta);
}
function esNif(cadena) {
  Varfinal = "TRWAGMYFPDXBNJZSQVHLCKE";
  Varprimera = "XYZLKME";
  cadena = cadena.replace(/\s/g, "").toUpperCase();

  if (
    cadena.length >= 6 &&
    cadena.length <= 8 &&
    /^\d+$/.test(cadena) &&
    parseInt(cadena) >= 100000
  ) {
    return "N3";
  }

  if (cadena.length == 9) {
    let Vchletrauno = cadena.charAt(0);
    let Vchletrault = cadena.charAt(8);

    if (Varprimera.includes(Vchletrauno)) {
      if (Vchletrauno == "Y") {
        Vchletrauno = "1";
      } else if (Vchletrauno == "Z") {
        Vchletrauno = "2";
      } else {
        Vchletrauno = "0";
      }
    }
    let Vstcalculo = cadena.substring(0, 8);
    let Vitresultado = parseInt(Vstcalculo) % 23;
    console.log(Vitresultado);
    if (Varfinal[Vitresultado] == Vchletrault) {
      return "N1";
    } else {
      return "N2";
    }
  }
  return "0";
}

function esCif(cadena) {
        vsitLongitud = cadena.length;
        vsitPrimer=cadena.charAt(0);
        vsitUlt=cadena.charAt(8);
        nums=['0123456789'];
        letraNum = ['ABCDEFGHJUV'];
        letraLetra = ['PQRSW'];
        letraUltima = ['JABCDEFGHI'];
        sumPar =0;
        sumImpar=0;
        sumTotal=0;
        numUltimo=0;
        longCompro = 0;
        letraCompro = 0;

        //Longitud cadena 9
        if(vsitLongitud!=9){
            return "0";
        }else{
            longCompro = 1;
        }
        
        //Que empieza por letra y acabe en número
        if(cadena.includes(letraNum) && !cadena.includes(nums)){
            return "C2";
        }else{
            letraCompro = 1;
        }

        //Que empieza por letra y acabe en letra
        if(cadena.includes(letraLetra) && !cadena.includes(letraUltima)){
            return "C2";
        }else{
            letraCompro = 1;
        }

        digitos = cadena.charAt(1)+ cadena.charAt(2)+cadena.charAt(3)+cadena.charAt(4)+cadena.charAt(5)+cadena.charAt(6)+cadena.charAt(7);
        //suma posiciones impares
        for(i=0;i<digitos.length;i=i+2){
            num = digitos[i]*2;
            st=num.toString();
            if (num>9){
                sumImpar = sumImpar + parseInt(st.charAt(0),10)+parseInt(st.charAt(1),10);
            }else{
                sumImpar=sumImpar+num;
            }
        }
        //suma posiciones pares
        for(i=1;i<digitos.length;i=i+2){
            sumPar=sumPar+parseInt(digitos[i],10);
        }
        //calculamos el caracter de control
        numUlt=cadena.charAt(8);
        sumTotal = sumImpar+sumPar;
        resto=sumTotal%10;
        numCaracter=10-resto;
        if(numCaracter==10){
            numCaracter=0;
        }
        //preguntamos la letra
        if((vsitUlt=="A" || numUlt == 1) ){
            numUltimo=1;
        }
        if(vsitUlt=="B" || numUlt == 2){
            numUltimo=2;
        }
        if(vsitUlt=="C" || numUlt == 3){
            numUltimo=3;
        }
        if(vsitUlt=="D" || numUlt == 4){
            numUltimo=4;
        }
        if(vsitUlt=="E" || numUlt == 5){
            numUltimo=5;
        }
        if(vsitUlt=="F" || numUlt == 6){
            numUltimo=6;
        }
        if(vsitUlt=="G" || numUlt == 7){
            numUltimo=7;
        }
        if(vsitUlt=="H" || numUlt == 8){
            numUltimo=8;
        }
        if(vsitUlt=="I" || numUlt == 9){
            numUltimo=9;
        }
        if(vsitUlt=="J" || numUlt == 0){
            numUltimo=0;
        }

        if(numUltimo==numCaracter){
            letraCompro =  1;
        }else{
            return "C2";
        }

        if(letraCompro == 1 && longCompro == 1){
            return "C1";
        }
}

/*function esNifesCif(cadena) {
  var doc = esNif(inputText);
  if (doc == undefined || doc == "N2") doc = esCif(inputText);

  if (doc != undefined) {
    switch (doc) {
      case "N1":
        Vstmensaje = "NIF correcto";
        break;
      case "N2":
        Vstmensaje = "NIF erróneo, carácter de control erróneo";
        break;
      case "N3":
        Vstmensaje = "Se ha introducido un Dni,6 a 8 digitos";
        break;
      case "0":
        Vstmensaje = "Dato no correcto";
        break;
      case "C1":
        Vstmensaje = "Cif Correcto";
        break;
      case "C2":
        Vstmensaje =
          "Se ha introducido un cif erróneo. El carácter de control es erróneo.";
        break;
    }
  }
  document.formulario.mensaje.value = Vstmensaje;
}*/
function esNifesCif(cadena) {
  const Varprimnif = 'XYZLKME';
  const Varfinnif = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const NumultCif = '0123456789';
  const letPrinCif1 = 'ABCDEFGHJUV';
  const letPrinCif2 = 'PQRSW';
  const letUltCif = 'JABCDEFGHI';
  
  const vstPosPrinif = cadena.charAt(0);
  const vstPosFinnif = cadena.charAt(8);
  
  let doc = null;
  
  if (Varfinnif.includes(vstPosFinnif) || (Varprimnif.includes(vstPosPrinif) && Varfinnif.includes(vstPosFinnif))) {
      doc = esNif(cadena);
  }
  
  if ((letPrinCif1.includes(vstPosPrinif) && NumultCif.includes(vstPosFinnif)) || (letPrinCif2.includes(vstPosPrinif) && letUltCif.includes(vstPosFinnif))) {
      doc = esCif(cadena);
  }
  
  switch (doc) {
      case "N1":
          Vstmensaje = "NIF correcto";
          break;
      case "N2":
          Vstmensaje = "NIF erróneo, carácter de control erróneo";
          break;
      case "N3":
          Vstmensaje = "Se ha introducido un Dni, 6 a 8 dígitos";
          break;
      case "0":
          Vstmensaje = "Dato no correcto";
          break;
      case "C1":
          Vstmensaje = "Cif Correcto";
          break;
      case "C2":
          Vstmensaje = "Se ha introducido un CIF erróneo. El carácter de control es erróneo.";
          break;
  }
    document.formulario.mensaje.value = Vstmensaje;
}

function CodigosControl(codBanco,numSucursal,numCuenta){
//Control de entrada para que codBanco tenga 4 long, numSucursal tenga 4 y numCuenta tenga 10
  if(codBanco.length==4){
    codBanco=codBanco;
  }
  if(numSucursal.length==4){
    numSucursal = numSucursal;
  }
  if(numCuenta.length==10){
    numCuenta=numCuenta;
  }
//Hacemos la asigancion de numero1 y numero2 con sus correspondientes calculos
  numero1 = (codBanco.charAt(0)*4)+(codBanco.charAt(1)*8)+(codBanco.charAt(2)*5)+(codBanco.charAt(3)*10);
  numero2 = (numSucursal.charAt(0)*9)+(numSucursal.charAt(1)*7)+(numSucursal.charAt(2)*3)+(numSucursal.charAt(3)*6);
  //obtenemos el primer caracter de control
  control1 = (((numero1+numero2) % 11) + 11) % 11;
  if(control1==10){
    control1=1;
  }else if(control1==11){
    control1=0;
  }
//Hacemos la asignacion de numero3 con los correspondientes calculos
  numero3 = (numCuenta.charAt(0)*1)+(numCuenta.charAt(1)*2)+(numCuenta.charAt(2)*4)+(numCuenta.charAt(3)*8)+(numCuenta.charAt(4)*5)+(numCuenta.charAt(5)*10)+(numCuenta.charAt(6)*9)+(numCuenta.charAt(7)*7)+(numCuenta.charAt(8)*3)+(numCuenta.charAt(9)*6);
//Obtenemos el segundo caracter de control
  control2=((numero3 % 11) + 11) % 11;
  if(control2==10){
    control2=1;
  }else if(control2==11){
    control2=0;
  }
//Realizamos la concatenación de los dos caracteres de control
  caracterControl = control1,control2;
  return caracterControl;
}
function calculoIBANEspanya(cuenta){
//Controlamos si cuenta tiene una longitud de 20 digitos
  if(cuenta.length==20){
    codCuenta=cuenta;
  }
  //Añadismo a codCuenta 14 28 00
  codCuenta = codCuenta,14,28,0,0;
  //Calculamos el resto y lo restamos a 98 
  resto = codCuenta % 97;
  codControl = 98 - codCuenta;
  //Si codControl tiene una longitud menor a 2 digitos, añadimos un 0 delante
  if(codControl < 10){
    codControl = 0,codControl;
  } 
//Construimos el IBAN
  codIBAN = "ES",codControl,codCuenta;
  return codIBAN;
}

