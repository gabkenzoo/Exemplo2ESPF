// DECLARACOES E VARIAVEIS 
// VAR, LET E CONST 

var nome= "fiap";
console.log(nome);
var nome="Dev";
console.log(nome);

if(true){
    var avatar="fiapinho";
    
}

console.log(avatar);
let exemplo1="Ola Dev-let";
console.log(exemplo1);

const exemplo2="Ola Dev-const";
console.log(exemplo2);

let exemplo3="20";
console.log(typeof exemplo3);

let exemplo4=true;
console.log (typeof exemplo4);

let exemplo5={nome:"fiap"};
console.log(exemplo5)

let exemplo6=["PHP", "JAVA", "HTML"]
console.log(exemplo6)

//valor undefined

let exemplo7;
console.log(exemplo7)

//valor nulo
let exemplo8=null;
console.log(exemplo8)

//Operadores aritimeticos

const valor1=10;
const valor2=20;

console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 / valor2)
console.log(valor1 * valor2)

// Operacoes logicos

const valor3=40;
const valor4=20;
console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 ||valor4 >10);

// Operadores de comparacao

console.log(valor3 == valor4); // So compara
console.log(valor3 === valor4);// compara e verifica a 

/*
Ultilizando as variaveis p(preço do produto) e v(valor do desconto),crie uma nota variavel chamada precofinal que subtraia o desconto do produto
*/

const p=40
const v=15
const precofinal=(p-v)

console.log("O desconto é de :",precofinal, "reais")

// estruturas condicionais
 
//if 
if(true) {
    console.log("Verdadeiro")
}
let nome3 = "Fiap";

//if else

if(nome3 =="Fiap"){
    console.log("nome correto")
}else{
    console.log("nome errado")
}

/// if, if else, encadeado/aninhado
 let idade = 13;
 if(idade<= 13){
    console.log ("Uma crianca")
 }else if(idade >13 && idade < 18){
    console.log ("um adolecente")
 }else{
    console.log("um adulto")
 }

 // switch case 
 let times ="Sao Paulo"

 switch(times){
    case "Sao paulo":
        console.log(" um time de tradicao") 
        break;
    case "Santos"
    console.log("sem tradicao ")
    

}