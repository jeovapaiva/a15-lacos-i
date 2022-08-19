

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i = 1; i <= maioresPaises.length; i++) {
    console.log(`${i} --- ${maioresPaises[i - 1]}`)   
}     

//  ${maioresPaises[i - 1 ]}     trás todos os países em ordem. se trocar o 1 por 2, não aparece a Rússia e sim o Canadá. se tirar o " - " e por um " , " a seguencia sai e fica apenas um país, de acordo com o número.
//   `   `                       Crase serve para não transformar os cochetes em strings, menos o que está fora dos cochetes o que é o caso dos 3 trasços.
//  let i = 0;                   se trocar o " 1 " " por " 0 " a seguencia vai partir de 0 mostrando undefined, sendo assim o certo é parte de " 1 " pois a Rússia está em 1.
//  i <= maioresPaises.length;   Serve para mostrar todos os nomes do array.
