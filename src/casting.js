"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -------------------------------------------------------------
// NAMESPACE: apenas um agrupador lógico, evita conflito de nomes.
// Você não precisa usar namespaces hoje em dia, mas funciona.
// -------------------------------------------------------------
var casting;
(function (casting) {
    // ---------------------------------------------------------
    // ANY — o tipo "aceita tudo"
    // ---------------------------------------------------------
    // Aqui criamos uma variável 'idade' com tipo ANY.
    // 'any' é o tipo mais permissivo do TypeScript: ele desliga
    // completamente o sistema de tipos.
    let idade = 25;
    // ---------------------------------------------------------
    // CASTING: idade como number
    // ---------------------------------------------------------
    // Estamos dizendo explicitamente ao TypeScript:
    // "confia em mim, isso aqui é um number".
    // Como idade = 25, isso faz sentido.
    idade.toFixed();
    // toFixed() só existe em number
    // então aqui está tudo certo.
    // ---------------------------------------------------------
    // CASTING: idade como string
    // ---------------------------------------------------------
    // Aqui estamos dizendo que *a mesma variável* interna (25)
    // agora "é" uma string.
    // TypeScript deixa porque 'idade' é any → qualquer cast é válido.
    idade.length;
    // Isso NÃO vai dar erro em TypeScript,
    // mas NO JAVASCRIPT REAL, number NÃO tem propriedade length.
    // Ou seja: aqui você está dizendo para o TypeScript:
    // "Confia, eu sei mais que você".
    // Casting não converte valores! Só muda o tipo que o TS enxerga.
    // ---------------------------------------------------------
    // CASTING ABSURDO: idade como string[]
    // ---------------------------------------------------------
    // Aqui estamos afirmando que idade é um ARRAY de strings.
    // De novo: só funciona porque idade é ANY.
    idade.forEach(x => {
        console.log(x);
    });
    // Se você rodar isso, vai dar erro em runtime:
    // number.forEach is not a function
    //
    // Esse é o grande perigo do ANY:
    // TypeScript acredita em você mesmo quando você está errado.
    // ---------------------------------------------------------
    // CASTING FORÇADO COM "unknown"
    // ---------------------------------------------------------
    // unknown é o oposto de any:
    // - any permite TUDO
    // - unknown bloqueia TUDO até que você prove ao TS
    //
    // Quando fazemos "35 as unknown as string":
    // 1) Primeiro: 35 vira unknown (TS não sabe o que é)
    // 2) Depois: unknown vira string (forçando conversão)
    //
    // É a forma "dupla" para enganar o TypeScript.
    // Muito usada quando você PRECISA forçar um cast absurdo.
    let nome = 35;
    // Isso não converte 35 para string! Isso apenas engana o TS.
    // Na prática, nome vai receber... 35.
    // E agora nome é do tipo string, mas com um number dentro.
})(casting || (casting = {}));
