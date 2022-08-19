
console.log("Você quer mais coxinhas?\n\n");
var coxinhas = prompt("Você quer mais coxinhas?\n\n S: Sim\n\nN: Não").toUpperCase(); 
var soma = 0;
const preco = 2.50 ;

while (coxinhas !== "N") { 
    soma += preco;  
    alert ("Quer mais coxinhas?");   
    coxinhas = prompt("Você quer mais coxinhas?\n\n S: Sim\n\nN: Não").toUpperCase(); 
   
}

console.log("Soma da conta:", soma);             