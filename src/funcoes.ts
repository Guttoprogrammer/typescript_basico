// --------------------------------------------------------------
// FUNÇÃO TRADICIONAL
// --------------------------------------------------------------

// Aqui temos uma função normal.
// Ela recebe dois parâmetros TIPADOS (base: number, altura: number)
// e o TypeScript INFERIRÁ que o retorno é number,
// porque o resultado de base * altura é um número.
function calculaArea(base: number, altura: number) {
    return base * altura;
}



// --------------------------------------------------------------
// ARROW FUNCTION COM TIPO EXPLÍCITO DE RETORNO
// --------------------------------------------------------------

// Arrow function é uma forma mais curta de escrever funções.
// Aqui estamos dizendo explicitamente que o retorno é "number".
const calculaArea2 = (base: number, altura: number): number => base * altura;

// Detalhes importantes:
// - Se a função arrow tem APENAS UMA expressão, não precisa usar { }
// - O retorno é implícito quando não tem chaves.
// - Em funções maiores, você usaria { } + return.



// --------------------------------------------------------------
// REST PARAMETERS (...)
// --------------------------------------------------------------

// "..." significa que a função pode receber vários números.
// numerOS é um array de number.
// (...numeros: number[]) = recebe qualquer quantidade.
function somar(...numeros: number[]): void {

    // "void" significa que a função NÃO retorna nada.
    // Ou seja, o retorno dela é undefined.

    console.log(numeros);

    // Aqui poderíamos somar tudo:
    // numeros.reduce((total, atual) => total + atual, 0);
    //
    // Mas deixei só o console.log pra ensinar o conceito.
}



// --------------------------------------------------------------
// RETORNO COM UNION TYPE
// --------------------------------------------------------------

// Esta função pode retornar STRING ou NUMBER.
// Isso é chamado de UNION TYPE: number | string
function teste(): number | string {

    // Como há duas possibilidades de saída,
    // o TypeScript exige que TODAS as rotas retornem algo
    // — por isso usamos if/else.

    if (10 > 5) {
        return "Dez maior que cinco"; // retorna string
    } else {
        return 5; // retorna number
    }
}



// --------------------------------------------------------------
// USANDO O RETORNO DA FUNÇÃO
// --------------------------------------------------------------

// O TypeScript entende que "resultadoDoTeste" pode ser number OU string.
// Então ele aplica "narrowing" (estreitamento) se você fizer checagens.
const resultadoDoTeste = teste();

// Exemplo (não está no seu código, só explicando):
// if (typeof resultadoDoTeste === "string") {
//     console.log(resultadoDoTeste.toUpperCase());
// }
