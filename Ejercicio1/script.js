//ejercicio 1
function subirAutoestima(){
    const answer = prompt('Eres bellisimo? y/n');
    if(answer == 'y'){
        alert('Ciertamente');
    }else{
        alert('No te creo');
    }
}
//ejercicio 2
function divisionDeDos(){
    const answer = parseInt(prompt('Ingresa un numero'));
    if(answer % 2 == 0){
        alert(`el numero ${answer} es divisible entre 2`);
    }else if(answer % 2 != 0){
        alert(`el numero ${answer} no es divisible entre 2`);
    };
};
//ejercicio 3
function parInpar(){
    const answer = parseInt(prompt('Ingresa un numero'));
    if(answer % 2 == 0){
        alert(`el numero ${answer} es par`);
    }else if(answer % 2 != 0){
        alert(`el numero ${answer} es impar`);
    };
};
//ejercicio 4
function jackpot(){
    const answer = parseInt(prompt('Ingrese el numero de cliente'));
    if(answer === 1000){
        alert('Ganaste un premio');
    }else{
        alert('Lo sentimos, sigue participando');
    };
};
//ejercicio 5
function menorNumero(){
    const answer1 = parseInt(prompt('ingresa el primer numero'));
    const answer2 = parseInt(prompt('ingresa el segundo numero'));
    if(answer1 < answer2){
        alert(`el numero ${answer1} es menor que ${answer2}`);
    }else if(answer1 > answer2){
        alert(`el numero ${answer2} es menor que ${answer1}`);
    };
};
//ejercicio 6
function mayorDeTres(){
    const answer1 = parseInt(prompt('ingresa el primer numero'));
    const answer2 = parseInt(prompt('ingresa el segundo numero'));
    const answer3 = parseInt(prompt('ingresa el tercer numero'));
    if(answer1 > answer2 && answer1 > answer3){
        alert(`el numero ${answer1} es mayor que ${answer2} y ${answer3}`);
    }else if(answer2 > answer1 && answer2 > answer3){
        alert(`el numero ${answer2} es mayor que ${answer1} y ${answer3}`);
    }else if(answer3 > answer1 && answer3 > answer2){
        alert(`el numero ${answer3} es mayor que ${answer1} y ${answer2}`);
    }
    if(answer2 == answer1 || answer2 == answer3 || answer1 == answer3){
        alert('existen numeros iguales!');
    }
}
//ejercicio 7
function dias_Semana(){
    dia = prompt("Ingresa un día de la semana: ").toLowerCase();
    if(dia == "lunes"){
        console.log("Gluglunes");
    }else if(dia == "viernes"){
        console.log("Beviernes");
    }else if(dia == "sabado" || dia == "domingo"){
        console.log("Sabadrink o Dormingo");
    }else{
        console.log("día de chambea");
    }
}
//Ejercicio 8
function calificacion(){
    calificacion = parseInt(prompt("Ingrese la calificacion: "));
    if(calificacion > 10){
        alert("Error: numero fuera de rango")
    }else if(calificacion == 10){
        console.log("Excelente");
    }else if(calificacion == 9){
        console.log("bien");
    }else if(calificacion >= 6 && calificacion <= 8){
        console.log("regular");
    }else if(calificacion < 6){
        console.log("reprobado");
    };
};
//Ejercicio 9
function costoHelado(){
    let total = 50
    let toping = prompt('desea algun topping en su helado?\nOreo\nKitkat\nBrownie\nninguno')
    toping.toLowerCase();
    if(toping == 'oreo'){
        total = total + 10;
    }else if (toping == 'kitkat'){
        total = total + 15;
    }else if (toping == 'brownie'){
        total = total + 20;
    }else if(toping == 'ninguno'){
        total = total;
    }else if(toping != 'oreo' || toping != 'kitkat' || toping !='brownie' || toping != 'ninguno'){
        alert(`ya no contamos con ${toping}!`);
    }
    alert(`El total del helado es de ${total}`);
}
//ejercicio 10
function curso(){
    total = 0;
    nivel1 = 4999;
    nivel2 = 3999;
    nivel3 = 2999;

    becaFacebook = .20
    becaGoogle = .15
    becaJesua = .50
    //indicar cuanto paga mensualmente por la opcion elegida
    let curso = parseInt(prompt('Ingresa el indice del curso que quieres tomar (1/2/3/3)...\n1)Course: 4999 al mes\n2)Carrera: 3999 al mes\n3)Master: 2999 al mes')); 
    if (curso == 1){
        total = total + nivel1;
        curso = 2; 
    }else if(curso == 2){
        total = total + nivel2;
        curso = 6;
    }else if(curso == 3){
        total = total + nivel3;
        curso = 12;
    }
    const descuento = parseInt(prompt('Ingresa el indice del tipo de beca con la que cuentas (1/2/3/4)...\n1)Beca Google\n2)Beca Facebook\n3)Beca Jesua\n4)Ninguna'));
    if (descuento == 1){
        total = total * (1-becaGoogle);
        console.log(`el costo mensual sera de $${total}`);
        alert(`el costo total del curso es de: $${total*curso}`);
    }else if(descuento == 2){
        total = total * (1-becaFacebook);
        console.log(`el costo mensual sera de $${total}`);        
        alert(`el costo total del curso es de: $${total*curso}`);
    }else if(descuento == 3){
        total = total * (1-becaJesua);
        console.log(`el costo mensual sera de $${total}`);
        alert(`el costo total del curso es de: $${total*curso}`);
    }else if(descuento == 4){
        total = total
        console.log(`el costo mensual sera de $${total}`);
        alert(`el costo total del curso es de: $${total*curso}`);
    }
}
//Ejercicio 11
function totalPagar(){
    const distanciaRecorrida = parseInt(prompt('Ingresa la cantidad recorrida: '));
    const litrosConsumidos = parseInt(prompt('Cuantos litros consumiste?'));
    const tipoVehiculo = parseInt(prompt('Que tipo de vehiculo fue?\n1:coche\n2:moto\n3:autobus'));
    let total = 0;
    let precio = 0;
    if(tipoVehiculo === 1){
        precio = .20;
    }else if(tipoVehiculo === 2){
        precio = .10;
    }else if(tipoVehiculo === 3){
        precio = .5;
    }
    if(litrosConsumidos <= 100 && litrosConsumidos >= 0 ){
        total = total + 5;
    }else if(litrosConsumidos > 100){
        total = total + 10;
    }
    total = total + (precio * distanciaRecorrida);
    console.log(`el total a pagar es de $${total}`);
}
