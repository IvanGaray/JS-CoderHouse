function comenzar() {
    alert('Bienvenido a la clase 3 donde repasamos los bucles, flujos, etc, etc*30')
    alert('A ver cómo está ese while.')

    let name = prompt('Poneme un nombre').toLowerCase()

    while (name !=='paula') {
        
        alert('Estuviste cerca...o no.. La única pista que te la voy a estar repitiendo las veces necesarias es....')
        alert('Empieza con P y termina con aula')
        
        name = prompt('Poneme un nombre').toLowerCase()
    }


    document.querySelector('div#apareceLuego').style.display = 'block'

}


function elSwitch() {
    alert('Abre la consola!')
    let elNumero = parseInt(prompt('Elegi un número del 1 al 5'))


    switch (elNumero) {
        case 1:
            console.log('Como mechi')
            break;
        case 2:
            console.log('Es un número mágico.')
            break;
        case 3:
            console.log('Es un número tibio. Le gusta el arte.')
            break;
        case 4:
            console.log('Este número a veces se eleva como la espuma.')
            break;
        case 5:
            console.log('Este número se eleva como el chocolate.')
            break;


        default:console.log('Pusiste un número fuera de mi imaginación o vagancia')
            break;
    }
    document.querySelector('div#loritos').style.display = 'block'
}



function lorito (){
    alert('Este es Jhon el loro. Repetirá tantas veces quieras una frase que elijas.')
    alert('¿Queres verlo en acción?')
    alert('That´s what she said')
    let frase = prompt('Dile tu frase')
    let numero = parseInt(prompt('Dile la cantidad de veces a repetir'))

    for (let index = 0; index < numero; index++) {
        console.log(frase)
        
    }
}



