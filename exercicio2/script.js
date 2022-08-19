
// codigo para ajeitar

// var num = +prompt("Insira um número!");

// for ( var i = 1; i< 10; i++) {
//    //if (num === 2){
//     console.log("2 x ", i , " = ", (2 * i)   )  
//}
//}  
// for (let i = 0; i <= 10; i++){
//     if (num === 2){
//         i = 0; i <= num; i++;
//         console.log("2 x "+ i +" = " + (2 * i));
//     }     
//     } 

console.log("Insira um número da tabuada:");
var num = +prompt();
var arrayTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

for (let i in arrayTabuada) {
    console.log (`${i} x ${num} = ${+i * num}`) 
}   
  