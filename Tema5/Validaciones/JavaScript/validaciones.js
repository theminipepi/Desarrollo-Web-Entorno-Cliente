window.onload = inicio;

function inicio() {
  document.formulario.boton.onclick = comenzar;
}

function comenzar() {
  Vstmensaje = " ";
  inputText = document.formulario.esNifesCif.value;
  esNifesCif(inputText);

  let codBanco, numSucursal, numCuenta;
  if(validacionNums(document.formulario.codBanco.value) == true && document.formulario.codBanco.value.length == 4){
    codBanco = document.formulario.codBanco.value;
  }
  if(validacionNums(document.formulario.numSucursal.value) == true && document.formulario.numSucursal.value.length == 4){
    numSucursal = document.formulario.numSucursal.value;
  }
  if(validacionNums(document.formulario.numCuenta.value) == true && document.formulario.numCuenta.value.length == 10){
    numCuenta = document.formulario.numCuenta.value;
  }
  cadenaiban = document.formulario.iban.value;
  comprobarIBAN(cadenaiban);
  codCodigoCont = CodigosControl(codBanco, numSucursal, numCuenta);
   document.formulario.codigoControl.value = codCodigoCont;

  iban =(codBanco.toString() + numSucursal.toString() + codCodigoCont.toString() + numCuenta.toString()) + "142800";
  codCalculoIBAN=calculoIBANEspanya(iban);
  document.formulario.ibanCompleto.value = codCalculoIBAN;
  
  
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
  
//Hacemos la asigancion de numero1 y numero2 con sus correspondientes calculos
  numero1 = (codBanco.charAt(0)*4)+(codBanco.charAt(1)*8)+(codBanco.charAt(2)*5)+(codBanco.charAt(3)*10);
  numero2 = (numSucursal.charAt(0)*9)+(numSucursal.charAt(1)*7)+(numSucursal.charAt(2)*3)+(numSucursal.charAt(3)*6);
  //obtenemos el primer caracter de control
  control1 = (11 - ((numero1+numero2) % 11));
  if(control1==10){
    control1=1;
  }else if(control1==11){
    control1=0;
  }
//Hacemos la asignacion de numero3 con los correspondientes calculos
  numero3 = (numCuenta.charAt(0)*1)+(numCuenta.charAt(1)*2)+(numCuenta.charAt(2)*4)+(numCuenta.charAt(3)*8)+(numCuenta.charAt(4)*5)+(numCuenta.charAt(5)*10)+(numCuenta.charAt(6)*9)+(numCuenta.charAt(7)*7)+(numCuenta.charAt(8)*3)+(numCuenta.charAt(9)*6);
//Obtenemos el segundo caracter de control
  control2=(11- (numero3 % 11));
  if(control2==10){
    control2=1;
  }else if(control2==11){
    control2=0;
  }
//Realizamos la concatenación de los dos caracteres de control
  caracterControl = (control1*10+control2);
  return caracterControl;
}
function calculoIBANEspanya(codCuenta) {
  // Calculamos el resto y lo restamos a 98
  cacho1 = codCuenta.substring(0, 9);
  cacho2 = codCuenta.substring(9, 18);
  cacho3 = codCuenta.substring(18);

  resto1 = parseInt(cacho1) % 97;
  resto2 = (parseInt(resto1.toString() + cacho2) % 97);
  resto3 = (parseInt(resto2.toString() + cacho3) % 97);
  codControl = 98 - resto3;

  // Si codControl tiene una longitud menor a 2 dígitos, añadimos un 0 delante
  if (codControl < 10) {
    codControl = "0" + codControl;
  }

  codCuenta = codCuenta.slice(0,-6);
  // Construimos el IBAN con los dígitos originales
  codIBAN = "ES" + codControl.toString() + codCuenta;

  return codIBAN;
}

function comprobarIBAN(codIbanOr){
  let codIban =  codIbanOr;
  let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letra;
  for(i=0;i<codIban.length;i++){
    if(letras.includes(codIban.charAt(i))){
      codIban.replaceall(codIban,letras.indexOf(codIban.charAt(i)));
      console.log(codIban)
    }
  }
  
  
}

function validacionNums(cadenaOr){
  let cadena = cadenaOr;
  let numeros = '0123456789';
  for(i = 0;i<cadena.length;i++){
    if(!(numeros.includes(cadena[i]))){
      return false;
    }
  }
    return true;
}


