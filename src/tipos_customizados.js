"use strict";
// --------------------------------------------------------------
// TYPE — criando um tipo customizado (apelido de um formato)
// --------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------------------------------------------------
// ARRAY DE ALUNOS USANDO O TIPO PERSONALIZADO
// --------------------------------------------------------------
// Podemos tipar arrays de duas formas:
// - aluno[] (mais comum)
// - Array<aluno> (alternativa)
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX-UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
];
// --------------------------------------------------------------
// Adicionando um novo aluno com push()
// --------------------------------------------------------------
// O push exige que o que você passar SIGA o formato de "aluno".
// Se faltar algum campo obrigatório, dá erro.
// Se colocar um campo inexistente, dá erro também.
alunos.push({
    nome: "Júlia",
    cursos: ["Arquitetura"],
    idade: 29,
});
// --------------------------------------------------------------
// Criando um aluno que NÃO tem "cursos"
// --------------------------------------------------------------
// Como "cursos?" é opcional, isso é permitido.
const novoAluno = {
    nome: "Lucas",
    idade: 32,
    // cursos: está faltando, mas tudo bem.
};
// --------------------------------------------------------------
// Função usando tipo customizado
// --------------------------------------------------------------
// Quando fazemos "aluno: aluno", estamos usando o tipo como assinatura.
// A função garante que o parâmetro RECEBIDO segue o formato de aluno.
function exibeAluno(aluno) {
    console.log(aluno.nome);
    // Como cursos é opcional, só podemos acessar se checar antes:
    // if (aluno.cursos) console.log(aluno.cursos);
}
