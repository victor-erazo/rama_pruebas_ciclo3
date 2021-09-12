function main(){

var nombre = "leo";
console.log(nombre);

var num1= 12;
var num2= 13.5
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

if(num1 %2 ==0 || num2 %2 ==0){
    console.log("El numero es PAR")
}else{
    console.log("El numero es IMPAR--")
}


var i= 0;

while(i<10){
    console.log(i+1);
    i++;
}

//EMACscripts es el nombre original JavaScript

for(let j=0; j<10; j++ ){
    console.log(j+21);

}

// Nueva forma de definir varibles aparte de VAR

const num3=30;
// hace ref a una constante que no puede cambiar de valor

let num4 = 5;
let num5 = 6;
let num6 = num4 +num5;
console.log(num6)
//let num4 = 10;
//Con let puedo tener cambios en el valor

}

function mostrarEnPantalla(){
    const inputName = document.getElementById("nombre");
    //const salida= document.getElementById("salida");
    //const salida2= document.getElementById("salida");
    const salida3= document.getElementById("salida");

    let resultado = "";
    for(let i=0; i<5; i++){
        resultado += "<div class ='col'>" +inputName.value+ " " +(i+1)+ "</div>";
        
    }
    
    
    
    //salida.innerHTML = "<h3>"+inputName.value+"</h3>";
    //salida2.innerHTML = "<div class ='row row-cols-3'>"+inputName.value+"</div>";
    salida3.innerHTML = "<div class ='row row-cols-3'>"+resultado+"</div>";

    console.log(inputName.value);
    inputName.value = "";

}

function mostrarSinClick(){
    const datoEntrada = document.getElementById("apellido");
    const datoSalida = document.getElementById("area2");
    datoSalida.innerHTML = datoEntrada.value; 
}

function activarTexto(){
    const inputName = document.getElementById("apellido");
    inputName.removeAttribute("readonly");
}

function bloquearTexto(){
    const inputName = document.getElementById("apellido");
    inputName.setAttribute("readonly",true);
}