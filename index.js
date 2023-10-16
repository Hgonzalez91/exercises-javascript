function valorMayor (n1, n2){
    if (n1>n2){
        console.log(`El número ${n1} es mayor que el número ${n2}`);
    } else if(n1 === n2){
        console.log(`El número ${n1} es igual que el número ${n2}`);
    }else{
        console.log(`El número ${n2} es mayor que el número ${n1}`);
    }
}

function opBasicas() {
    
}


//FUNCION ES MAYOR

    /*if (valor1>valor2){
        console.log(`El número ${valor1} es mayor que el número ${valor2}`);
    } else if(valor1 == valor2){
        console.log(`El número ${valor1} es igual que el número ${valor2}`);
    }else{
        console.log(`El número ${valor1} es mayor que el número ${valor2}`);
    }*/


//SUMA RESTA MULT DIV

    /*let valor1 = parseInt(prompt('Escribe un primer número'));
    let valor2 = parseInt(prompt('Escribe un segundo número'));
    
    console.log(valor1+valor2);
    console.log(valor1-valor2);
    console.log(valor1*valor2);
    console.log(valor1/valor2);*/


//RAIZ CUADRADA

    /*let valor1 = parseInt(prompt('Escribe un primer número'));
    console.log(Math.sqrt(valor1));*/

    //DEVUELVE LONGITUD DE PALABRA
    /*let palabra = prompt('Escribe un primer número');
    console.log(palabra.length);*/


//REVERTIR PALABRA

    /* let palabra = prompt('Escribe una frase');
    let nuevaPalabra = palabra;
    for (i = palabra.length - 1; i >= 0; i--) {
        nuevaPalabra +=palabra[i];
    }
    return nuevaPalabra; */
    

//REPETIR FRASE

    /*let frase =prompt("Escribe una fase")
    console.log(frase.repeat(3) + "/");*/


//AGREGAR VALORES AL PRINCIPIO DEL ARRAY
    
    /* let artistas = ["the Weeknd", "Taylor Swift"];
    let valorAgregado = artistas.unshift(prompt("Escribe el artista para agregar a la lista"));
    console.log(artistas); */


//REVERTIR LOS VALORES DEL ARRAY
    
    /*let artistas = ["the Weeknd", "Taylor Swift", "Micro TDH", "Neutro Shorty"];
    let valorAgregado = artistas.reverse();
    console.log(artistas);*/


//SUMAR TODOS LOS NUMEROS DE UN ARRAY
    
    /*let numeros = [1,2,3,4,5,6,7,8,9];
    suma = 0;
    for(i = 0; i <= numeros.length; i++){
        numero = numeros[i];
        suma += numero;
    }
    console.log(suma);*/
