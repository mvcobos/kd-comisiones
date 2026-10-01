const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
  let comision = 0;

  if (numeroVentas > VENTAS_BASE) {
    let ventasExtra = numeroVentas - VENTAS_BASE;
    comision = ventasExtra * (precioProducto * 0.1);
  }

  return comision;
}

function validarVentas(){
    let numeroVentasStr = recuperarTexto("txtVentas").trim();

    if(numeroVentasStr == ""){
        mostratEnSpan("lblErrorVentas", "Ingresa el número de ventas");
        return false;
    } else if(isNaN(numeroVentasStr) || !Number.isInteger(Number(numeroVentasStr))){
        mostratEnSpan("lblErrorVentas", "Debe ser un número entero");
        return false;
    } else if(Number(numeroVentasStr) < 0){
        mostratEnSpan("lblErrorVentas", "No puede ser negativo");
        return false;
    } else if(numeroVentasStr.length > 5){
        mostratEnSpan("lblErrorVentas", "Máximo 5 dígitos");
        return false;
    } else{
        mostratEnSpan("lblErrorVentas", "");
        return true;
    }
}

function calcular(){

    if(validarVentas() == false){
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    mostratEnSpan("spSueldoBase", sueldoBase);
    mostratEnSpan("spComision", comision);
    mostratEnSpan("spTotal", total);
}

function validarNumeroDecimal(idInput, idError, nombreCampo){
    let valorStr = recuperarTexto(idInput).trim();
    let cantidadDigitos = valorStr.replace(".", "").length;

    if(valorStr == ""){
        mostratEnSpan(idError, "Ingresa el " + nombreCampo);
        return false;
    } else if(!/^\d+(\.\d+)?$/.test(valorStr)){
        mostratEnSpan(idError, "Solo se permiten números");
        return false;
    } else if(cantidadDigitos > 5){
        mostratEnSpan(idError, "Máximo 5 dígitos");
        return false;
    } else{
        mostratEnSpan(idError, "");
        return true;
    }
}

function validarSueldoBase(){
    return validarNumeroDecimal("txtSueldoBase", "lblErrorSueldoBase", "salario base");
}

function validarPrecio(){
    return validarNumeroDecimal("txtPrecio", "lblErrorPrecio", "precio del producto");
}

function validarYCalcular(){
    // Se ejecutan todas para que cada campo muestre su mensaje a la vez
    let sueldoValido = validarSueldoBase();
    let ventasValidas = validarVentas();
    let precioValido = validarPrecio();

    if(sueldoValido && ventasValidas && precioValido){
        calcular();
    }
}