let sueldoMensual;
let sueldoAnual;
let sueldoSemanal;
let sueldoDiario;
let anionacimiento;
let edad;
let nombre;
let color;
let descripcion;
const miObjeto={};
let unArray=[];
var temp;

function multiplicar(a, b) {
    return a * b;
}

function dividir(c, d) {
    return c / d;
}



function calculos() {
    alert("Ahora voy a robar.....calcularte varias cosas con solo saber tu sueldo");

    sueldoMensual = parseInt(prompt("Ingresa tu sueldo mensual", "En pesitos argentinos"));
    sueldoAnual = multiplicar(sueldoMensual, 12);
    sueldoSemanal = dividir(sueldoMensual, 4);
    sueldoDiario = dividir(sueldoSemanal, 5);
    anioActual = parseInt(prompt("Indica el año en el que estamos."));
    anionacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
    edad = (anioActual - anionacimiento);
    nombre= prompt('Indicanos tu nombre');
    color=prompt('Indicanos tu color favorito');
    descripcion=prompt('Danos una breve descripcion de vos.')
    hagamosUnObjeto()
}
function tablaDato() {
    document.getElementById("age").innerHTML = (edad + " años")
    document.getElementById("sueldoMes").innerHTML = (sueldoMensual);
    document.getElementById("sueldoAnio").innerHTML = (sueldoAnual);
    document.getElementById("sueldoSem").innerHTML = (sueldoSemanal);
    document.getElementById("sueldoDia").innerHTML = (sueldoDiario);
    document.getElementById("aDagle").innerHTML = ("De nuevo!");


}

function esMultiploide(){
    

if(( sueldoMensual % 14 ) == 0){

	document.getElementById("sueldoMultiplo").innerHTML = ("Si");
    
}else{

	document.getElementById("sueldoMultiplo").innerHTML = ("No");

}

}



function calculandoCosas() {
    calculos();
    tablaDato();
    esMultiploide();

}


function hagamosUnObjeto(){

    miObjeto.nombre=nombre;
    miObjeto.sueldo=sueldoMensual;
    miObjeto.color=color;
    miObjeto.edad=edad;
    miObjeto.descripcion=descripcion;

    console.log(miObjeto)
    document.getElementById("nombre").innerHTML = miObjeto.nombre;
    document.getElementById("descripcion").innerHTML = miObjeto.descripcion;
    document.getElementById("color").innerHTML = miObjeto.color;
}


function addElement () {
    // crea un nuevo div
    var newDiv = document.createElement("div");
    // y añade contenido
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }



function funcionArray(){
unArray.push(sueldoMensual,sueldoAnual,sueldoSemanal,edad,nombre,color,descripcion)
console.log(unArray)



for (i = 0; i < unArray.length; i++) {
  temp = document.createElement('tr');
  temp.className = 'desdeArray';
  temp.innerHTML = unArray[i];
  document.getElementsByClassName('elArray')[0].appendChild(temp);
}

}
