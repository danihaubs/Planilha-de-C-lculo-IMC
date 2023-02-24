var titulo = document.querySelector (".titulo");

var pacientes = document.querySelectorAll (".paciente"); //seletor de classe é o .

console.log(pacientes);

for(var i = 0; i < pacientes.length ; i++){ //length mostra o tamanho do array

var paciente = pacientes[i]; //  i identifica

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;


var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;
                    
if(peso <= 0 || peso >= 1000){ //as duas barrinhas são "ou"
console.log("peso inválido");
pesoEhValido = false;
tdImc.textContent = "Peso inválido";
paciente.classList.add("paciente-invalido");
}
                    
if(altura <= 0 || altura >= 3.00){
console.log ("Altura inválida");
alturaEhValida = false;
tdImc.textContent = "Altura inválida";
paciente.classList.add("paciente-invalido"); //add uma classe, e essa classe editei no CSS
}
                    
if (alturaEhValida && pesoEhValido){
var imc = calculaImc (peso,altura);
tdImc.textContent = imc; //limitar casas decimais toFixed
}}
        
function validaPeso(){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2); //limitar casas decimais toFixed
}                  