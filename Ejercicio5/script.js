let colores = ['#00ff00', '#ffff00', '#ff0000'];
let tiempoEntreLuces = 3000;
let indiceLuz = 0;
let luzActual = 'verde';

function cambiarLuz(color) {
    const luces = ['rojo', 'amarillo', 'verde'];

    // Apagar todas las luces excepto la actual
    luces.forEach(luz => {
        if (luz !== luzActual) {
            document.getElementById(luz).style.backgroundColor = '#000';
        }
    });

    // Encender la luz deseada
    document.getElementById(luzActual).style.backgroundColor = color;

    indiceLuz = (indiceLuz + 1) % colores.length;
    luzActual = luces[indiceLuz];

    // Llamar a la función nuevamente después de un tiempo
    setTimeout(() => {
        cambiarLuz(colores[indiceLuz]);
    }, tiempoEntreLuces);
}

// Comenzar el ciclo automáticamente
cambiarLuz(colores[indiceLuz]);
