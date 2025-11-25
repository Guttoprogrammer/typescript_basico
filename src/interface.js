"use strict";
// -------------------------------------------------
// 🏦 AULA SOBRE HERANÇA + INTERFACES NO TYPESCRIPT
// -------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// 📌 Classe base "Conta"
// Representa a estrutura mínima de uma conta bancária.
class Conta {
    numeroDaConta;
    saldo = 0;
    constructor(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
}
// Analogia: toda conta bancária precisa ter um número e um saldo.
// Essa é a base de todas as outras contas.
// -------------------------------------------------
// 💼 ContaSalario — exemplo simples de herança
// -------------------------------------------------
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
// Analogia: interfaces são CONTRATOS.
// Se a conta quiser poder fazer transferências,
// ela precisa seguir o contrato ITransacional.
// -------------------------------------------------
// 🏛️ ContaCorrente — herança + implementação de interfaces
// -------------------------------------------------
class ContaCorrente extends Conta {
    // ✔ OBRIGATÓRIO pela interface ITransacional
    taxaTransferecia = 0;
    // ✔ OBRIGATÓRIO pela interface IExemplo2
    cnpj = 12345678000100;
    // ✔ OBRIGATÓRIO pela interface IExemplo3
    telefone = 11999999999;
    // ✔ OBRIGATÓRIO pela interface ITransacional
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferecia);
        return true;
    }
}
// Analogia:
// ContaCorrente é uma conta completa no banco.
// Ela assina três contratos (interfaces).
// Isso quer dizer que ELA É OBRIGADA a entregar tudo que eles pedem.
// -------------------------------------------------
// ❌ FORÇANDO O ERRO — objeto que tenta seguir a interface
// -------------------------------------------------
// Aqui você disse que contaDaMaria É DO TIPO ITransacional.
// Mas não colocou NADA do contrato dentro dela.
// Por isso o TypeScript reclama.
// const contaDaMaria: ITransacional = {
// ❌ Aqui vai dar erro porque:
// - falta taxaTransferecia
// - falta transferir()
// };
// -------------------------------------------------
// ✔ VERSÃO CORRETA (se quiser criar um objeto simples)
// -------------------------------------------------
const contaDaMariaCorreta = {
    taxaTransferecia: 0.5,
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferecia);
        return true;
    }
};
// Isso agora respeita o contrato exigido por ITransacional.
// Nenhum erro!
