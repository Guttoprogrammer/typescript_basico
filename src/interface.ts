// -------------------------------------------------
// 🏦 AULA SOBRE HERANÇA + INTERFACES NO TYPESCRIPT
// -------------------------------------------------

// 📌 Classe base "Conta"
// Representa a estrutura mínima de uma conta bancária.
class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}
// Analogia: toda conta bancária precisa ter um número e um saldo.
// Essa é a base de todas as outras contas.


// -------------------------------------------------
// 💼 ContaSalario — exemplo simples de herança
// -------------------------------------------------

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}
// Analogia: Uma ContaSalario é uma Conta normal,
// mas com a função extra de receber depósito.


// -------------------------------------------------
// 📜 INTERFACES — CONTRATOS OBRIGATÓRIOS
// -------------------------------------------------

// 👉 Interface ITransacional
// Qualquer conta que "implemente" isso PRECISA oferecer:
//   - Uma função de transferir
//   - Uma taxa de transferência
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferecia: number;
}

// 👉 Outras interfaces menores (apenas para demonstrar múltiplas implementações)
interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 {
    telefone: number;
}

// Analogia: interfaces são CONTRATOS.
// Se a conta quiser poder fazer transferências,
// ela precisa seguir o contrato ITransacional.


// -------------------------------------------------
// 🏛️ ContaCorrente — herança + implementação de interfaces
// -------------------------------------------------

class ContaCorrente 
    extends Conta 
    implements ITransacional, IExemplo2, IExemplo3 {

    // ✔ OBRIGATÓRIO pela interface ITransacional
    taxaTransferecia: number = 0;

    // ✔ OBRIGATÓRIO pela interface IExemplo2
    cnpj: number = 12345678000100;

    // ✔ OBRIGATÓRIO pela interface IExemplo3
    telefone: number = 11999999999;

    // ✔ OBRIGATÓRIO pela interface ITransacional
    transferir(valor: number, destinatario: Conta) {
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

const contaDaMariaCorreta: ITransacional = {
    taxaTransferecia: 0.5,
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferecia);
        return true;
    }
};
// Isso agora respeita o contrato exigido por ITransacional.
// Nenhum erro!
