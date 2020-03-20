function sumar(pepeA,pepeB){//es lo mismo que opA y opB
    return pepeA+pepeB;
}
function restar(pepeA,pepeB){//es lo mismo que opA y opB
    return pepeA-pepeB;
}
function multiplicar(pepeA,pepeB){//es lo mismo que opA y opB
    return pepeA*pepeB; 
}
function dividir(pepeA,pepeB){//es lo mismo que opA y opB
    return pepeA/pepeB;
}

module.exports= [sumar,
    "restar":restar,
    "multiplicar":multiplicar,
    "dividir":dividir ];
