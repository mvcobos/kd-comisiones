function recuperarTexto(idComponente){
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;
}

function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}

function recuperarEntero(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorTexto);
    return valorEntero;
}

function mostratEnSpan(idComponente, valor){
    let componente = document.getElementById(idComponente);
    componente.textContent = valor;
}