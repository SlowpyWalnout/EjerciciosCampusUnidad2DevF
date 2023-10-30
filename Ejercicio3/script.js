//Ejercicio 1
function multiploDeCinco(){
    const numero = parseInt(prompt('ingresa un numero'));
    for(let i = 0; i <= numero; i++){
        if(i % 5 == 0){
            console.log(`el numero ${i} es multiplo de 5`);
        }
    }
};
multiploDeCinco()
//Ejercicio 2
function loteria(){
    const numero1 = parseInt(prompt('Ingresa un numero entre 1 y 50!'));
    const numero2 = parseInt(prompt('Ingresa un numero entre 1 y 50!'));
    for(let i = 0; i <= 50; i++){
    
        if(numero1 == i || numero2 == i){
            console.log(`${i} loteria!`)
            continue;
        }
        console.log(i)
    }
}
loteria()
//Ejercicio 3
function almacenaNumeros(){
    let array = [];
    while(true){
        let numero = prompt('Ingresa un numero: \nSi deseas finalizar, ingresa el 0.');
        if(isNaN(numero) == false){
            if(numero == 0){
                break;
            }else{
                array.push(parseInt(numero));
            }
        }else{
            console.log('ingresa un numero!')
        }
    }
    console.log('los numeros que ingresaste: ', array)
}
almacenaNumeros()
//Ejercicio 4
function guardarPalabras(){
    let array = [];
    while(true){
        let respuesta = prompt('Ingresa una letra o una palabra: \nSi deseas terminar de ingresar letras, no escribas nada');
        if(respuesta === ''){
            break;
        }else{
            array.push(respuesta);
        }
    }
    console.log('esto es lo que ingresaste...', array)
}
guardarPalabras()
//Ejercicio 5
function diaSemana(){
    while(true){
        let dia = prompt('ingresa un dia de la semana').toLowerCase();
        if (dia == 'lunes'){
            alert('Empezamos a chambear');
        }else if(dia == 'martes'){
            alert('Ya mero mitad de semana');
        }else if(dia == 'miercoles'){
            alert('Ya es mitad de semana');
        }else if(dia == 'jueves'){
            alert('Ya mero es viernes');
        }else if(dia == 'viernes'){
            alert('ya es viernes!');
        }else if(dia == 'sabado'){
            alert('empezo el fin de semana!')
        }else if(dia == 'domingo'){
            alert('ve a descansar');
            break;
        }else{
            alert('escribe bien el dia...')
        }
    }
}
diaSemana()