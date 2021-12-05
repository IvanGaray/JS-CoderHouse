let sueldoMensual;
let sueldoAnual;
let sueldoSemanal;
let sueldoDiario;
let anionacimiento;
let edad;


function multiplicar(a,b){
    return a * b;
}

function dividir(c,d){
    return c / d;
}



function calculos(){
    alert("Ahora voy a robar.....calcularte varias cosas con solo saber tu sueldo");
    sueldoMensual = parseInt(prompt("Ingresa tu sueldo mensual","En pesitos argentinos"));
    sueldoAnual = multiplicar(sueldoMensual,12);
    sueldoSemanal = dividir(sueldoMensual,4);
    sueldoDiario = dividir(sueldoSemanal,5);
    anioActual = parseInt(prompt("Indica el año en el que estamos."));
    anionacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
    edad = (anioActual - anionacimiento);
    }
    function tablaDato(){
        document.getElementById("age").innerHTML=(edad + " años")
        document.getElementById("sueldoMes").innerHTML=(sueldoMensual);
        document.getElementById("sueldoAnio").innerHTML=(sueldoAnual);
        document.getElementById("sueldoSem").innerHTML=(sueldoSemanal);
        document.getElementById("sueldoDia").innerHTML=(sueldoDiario);
        document.getElementById("aDagle").innerHTML=("De nuevo!");
      

}






function calculandoCosas(){
    calculos();
    tablaDato();

    
}   