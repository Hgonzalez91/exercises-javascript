function esMayor (){

    let valor1 = parseInt(prompt('Escribe un primer número'));
    let valor2 = parseInt(prompt('Escribe un segundo número'));
    
    if (valor1 == valor2){
        alert(`El número ${valor1} es igual que el número ${valor2}`);
    } else if(valor1>valor2){
        alert(`El número ${valor1} es mayor que el número ${valor2}`);
    }else{
        alert(`El número ${valor1} es menor que el número ${valor2}`);
    }
}

function opBasicas() {

    let numero1 = parseInt(prompt('Escribe un primer número'));
    let numero2 = parseInt(prompt('Escribe un segundo número'));
    
    alert(`Operaciones básicas de los números obtenidos\n
        ${numero1} + ${numero2} = ${numero1+numero2}\n
        ${numero1} - ${numero2} = ${numero1-numero2}\n
        ${numero1} * ${numero2} = ${numero1*numero2}\n
        ${numero1} / ${numero2} = ${numero1/numero2}`);
}

function raizCuadrada() {

    let raiz = parseInt(prompt('Escribe un número para saber su raíz cuadrada'));
    alert(`La raiz cuadrada de ${raiz} es = ${Math.sqrt(raiz)}`);

}

function longitudPalabra() {
    let palabra = prompt('Escribe un primer número');
    console.log(palabra.length);
}

function invertirFrase() {
    let palabra = prompt('Escribe una frase');
    let invertido = "";
    for (i = palabra.length - 1; i >= 0; i--) {
        invertido += palabra[i];
    }
    alert(invertido);
}

function repetirFrase() {


    let frase = prompt("Escribe una fase");
    let cuenta = prompt("¿Cuántas veces quieres que se repita la frase?");
    alert(`${frase.repeat(cuenta)}`);

}

function addToList() {
    
    let artistas = ["The Weeknd", "Taylor Swift"];
    alert(`Esta es la lista de artistas musicales: \n ${artistas}`);
    let valorAgregado = artistas.unshift(prompt("Escribe un artista para agregar a la lista"));
    alert(artistas);

}

function revertirValores() {
    let artistas = ["The Weeknd", "Rawayana", "Micro TDH", "Sandy & Papo"];
    alert(`Tu lista: \n ${artistas}`)
    let valorAgregado = artistas.reverse();
    alert(`Tu lista invertida: \n ${artistas}`);
}

function sumarValores() {
    
    let numeros = [1,2,3,4,5,6,7,8,9];
    let suma = numeros.reduce((a, b) => a + b, 0);
    
    console.log(suma);
}

function iterador(){
    let count = parseInt(prompt('¿Cúantos números desea ver?'));
    for(i=1; i<=count; i++){
    console.log(i);
    }
}

function iteradorMultiplicado(){
    let result; 
    let count = parseInt(prompt('¿Cúantos números desea ver?'));
    for(let i=1; i<=count; i++){
    console.log(i);
    result = i;
    }
    alert(`La cuenta de tu iteración multiplicado por 2 es = ${result*2}`)
}

function indiceDelIterador(){
    let lista = [];
    let count = parseInt(prompt('¿Cúantos números desea ver?'));
    for(i=1; i<=count; i++){
    lista.push(i); 
    }
    lista.forEach((item, index, arr) => {
        console.log(`Índice = [${index}] | Item = ${item}`)
    });
    
}
