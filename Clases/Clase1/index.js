let productos ={
    Gaseosa:{
        precio:250
    },
    Jugo:{
        precio:40
    },Golosina:{
        precio:50
    },
    Café:{
        precio:120
    }
}

window.onload = function setPrice(){

document.querySelector('td#precio1').innerHTML=productos["Gaseosa"].precio;
document.querySelector('td#precio2').innerHTML=productos["Jugo"].precio;
document.querySelector('td#precio3').innerHTML=productos["Golosina"].precio;
document.querySelector('td#precio4').innerHTML=productos["Café"].precio;
}


function calculate() {
console.log(productos)

let cart1 = prompt('Elige tu producto')
let cart2 = prompt('Elige tu segundo producto')
let total = productos[cart1].precio+productos[cart2].precio
alert(`En tu carrito hay los siguientes productos:${cart1} y ${cart2}. El total de la compra es: $ ${total}`)
let pago = Number(prompt(`¿Con cuanto vas a abonar?`))



alert("Tu vuelto es: $"+ parseInt(pago-total))

}

