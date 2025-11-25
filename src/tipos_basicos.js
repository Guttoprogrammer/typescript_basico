"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------------------------------------------------
// BOOLEAN — tipo lógico (verdadeiro ou falso)
// --------------------------------------------------------------
let estaChovendo = false;
// podemos alterar para true, porque ainda é boolean
estaChovendo = true;
// --------------------------------------------------------------
// NUMBER — números em geral (inteiros, decimais, hex, binário...)
// --------------------------------------------------------------
let idade = 27;
let altura = 1.75;
// Em JS/TS não existe divisão entre "int" e "float":
// tudo é number.
// --------------------------------------------------------------
// STRING — textos
// --------------------------------------------------------------
const nacionalidade = 'brasileira';
// Aceita "", '', ou template strings:
// const nome = `Fulano ${sobrenome}`;
// --------------------------------------------------------------
// ARRAYS — formas diferentes de declarar
// --------------------------------------------------------------
// Forma mais comum:
const colegas = ["Luan", "Guto"];
// Forma alternativa usando "Array<Tipo>":
const tecnologias = ["html", "css", "js"];
// ReadonlyArray — impede modificações do array
// notas.push(11) -> ERRO
const notas = [7, 8, 9, 10];
// --------------------------------------------------------------
// TUPLAS — array com quantidade fixa e tipos fixos
// --------------------------------------------------------------
const lista = ["guto", true, 21];
// Tupla ≠ array comum
// A ordem e quantidade têm que ser EXATAS.
// --------------------------------------------------------------
// UNION TYPES — variável pode ter mais de um tipo
// --------------------------------------------------------------
let idadeDaAna = 26;
// pode virar "string"
idadeDaAna = "vinte e seis";
// pode voltar a ser número
idadeDaAna = 26;
// --------------------------------------------------------------
// ANY — foge das regras de tipos
// --------------------------------------------------------------
let dadosDaApi;
// Pode virar qualquer coisa:
dadosDaApi = 10;
dadosDaApi = "10";
dadosDaApi = "Olá";
dadosDaApi = true;
dadosDaApi = [10, 20, 30, 40, "Olá"];
// ANY desliga o sistema de tipos.
// TS acredita em você, mesmo se você fizer algo sem sentido.
// Evite usar, exceto quando realmente necessário
// (ex: APIs externas, código legado).
