let nombre = prompt('¿Cómo te llamas?');
alert(`Bienvenido ${nombre}!. Vamos a hacerte algunas preguntas`)
let favouriteColor = prompt('Dinos tu color favorito').toLowerCase();



if (favouriteColor=='azul') {
    alert('El nuestro también es el azul!')
} else {
    alert('Wacatelas, no nos gusta ese color')
    
}


let favouriteNumber = prompt('Ahora te pediremos un número. cualquiera....¡El tuyo!')


if (favouriteNumber > 10) {
    alert('Más que el Messi');
} else if (favouriteNumber < 10) {
    alert('No tanto como el Messi');
}
else if (favouriteNumber == 10) {
    alert('Como Messi');
}
else {
    alert('Debías poner algún número!');
}
