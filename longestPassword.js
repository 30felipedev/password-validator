function solution(S) {

    var arrayWord = (S).split(" "); //separa as senhas em um array
    arrayWord = arrayWord.filter(word => { //inicia processo de filtragem de senhas

        if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(word)) { //verifica se a senha contém apenas caracteres alfanumericos
            return false;
        }

        let numLetras = (word.match(/[a-zA-Z]/g) || []).length;//verifica quantidade de letras da senha

        let numDigit = (word.match(/[0-9]/g)).length;//verifica quantidade de digitos da senha

        return (numLetras % 2 === 0 || numLetras === 0) && numDigit % 2 !== 0;//retorna os valores que contenham numero de letras par e numero de digitos impares

    });

    var biggestPassword = 0

    arrayWord.forEach(word => {

        if (word.length > biggestPassword) {
            biggestPassword = word.length; //foreach que compara as senhas e armazena a quantidade de caracteres da maior 
        }
    });

    if (biggestPassword != 0) {
        console.log(biggestPassword); //exibição da quantidade de caracteres da maior senha 
    }
    else {
        console.log(-1);//em caso de nenhuma senha válida, retorna o valor -1
    }
}

//importação de biblioteca para interagir com o terminal
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite as senhas: ", (S) => {

    solution(S);

    rl.close();
});
