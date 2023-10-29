//funcion para numeros aleatorios
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
//Ejercicio 1
function generaNumeros(){
    let array = [];
    for (let i = 0; i < 10; i++){
        array.push(getRandomInt(100));
    }
    console.log(array);
}
generaNumeros()
//Ejercicio 2
function convertirLista(){
    let string = prompt('Ingresa los elementos que quieras incluir en la lista: ');
    let array = [];
    //para recorrer todo el string
    let wordlength = 0;
    let inicio = 0
    let i = 0
    for (char of string){
        wordlength++;
        i++;
        if(char == `,`){
            array.push(string.slice(inicio, i-1))
            inicio = inicio + wordlength
            wordlength = 0
        }
    }
    array.push(string.slice(inicio, string.length))
    console.log(array)
    console.log(string)
}
convertirLista()
//Ejercicio 3
function listaOrdenada(lista){
    const array = lista
    array.sort(function (a,b){
        return a - b
    });
    console.log(`la lista ordenada quedó así... ${array}`)
    console.log(`el numero menor de la lista es ${array[0]} y el numero mayor de la lista es ${array[array.length-1]}`)
}
listaOrdenada([10, 40, 30, 20, 15, 5])