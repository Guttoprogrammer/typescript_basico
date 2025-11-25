// ---------------------------------------------------------------
// CLASSE PESSOA
// ---------------------------------------------------------------

// Aqui criamos uma classe chamada Pessoa.
// Uma classe é como um "molde" para criar objetos.
class Pessoa {

    // Atributo (propriedade) obrigatória: nome precisa ser string.
    nome: string;

    // Atributo opcional: renda pode ser number ou undefined.
    // Isso significa que ela pode existir ou não.
    renda?: number;

    // O construtor é chamado automaticamente quando criamos um "new Pessoa()"
    // Ele recebe os parâmetros e os atribui às propriedades da classe.
    constructor(nome: string, renda?: number) {
        this.nome = nome;   // "this" referencia o objeto sendo criado.
        this.renda = renda; // renda pode ser passada ou não.
    }

    // Método da classe: retorna uma string.
    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}



// ---------------------------------------------------------------
// CLASSE CONTA BANCÁRIA
// ---------------------------------------------------------------

class ContaBancaria {

    // "protected" permite acesso apenas dentro da classe
    // E dentro de classes FILHAS (herança).
    protected saldo: number = 0;

    // "public" é o padrão: qualquer um pode acessar.
    public numeroDaConta: number;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }

    // Método PRIVATE: apenas esta classe consegue chamar.
    // Nenhuma classe filha ou objeto pode acessar getSaldo().
    private getSaldo() {
        return this.saldo;
    }

    // Método STATIC:
    // Não pertence à instância (objeto), e sim à classe.
    // Ou seja: você chama ContaBancaria.retornaNumeroDoBanco()
    // e não conta.retornaNumeroDoBanco()
    static retornaNumeroDoBanco() {
        return 125;
    }

    // Método comum: altera o saldo da conta.
    // Usa "this" porque pertence à instância.
    depositar(valor: number) {
        this.saldo += valor;
    }
}



// ---------------------------------------------------------------
// HERANÇA — CLASSE FILHA
// ---------------------------------------------------------------

// "extends" cria herança: a classe filha herda atributos e métodos da classe pai.
class ContaBancariaPessoaFisica extends ContaBancaria {

    // Aqui estamos SOBREESCREVENDO (override) o método depositar().
    depositar(valor: number): void {

        // saldo é "protected", então classes filhas conseguem acessar.
        this.saldo += valor;

        // Poderíamos adicionar regras extras (ex: limite)
        // mas deixei igual ao pai só para demonstrar o override.
    }
}



// ---------------------------------------------------------------
// USO DAS CLASSES
// ---------------------------------------------------------------

// Criando uma conta de pessoa física.
// O construtor da classe pai exige numeroDaConta.
const ContaDoFulano = new ContaBancariaPessoaFisica(123456);

// Podemos chamar métodos herdados.
ContaDoFulano.depositar(500);

// Não podemos acessar .saldo diretamente porque é protected.
// ContaDoFulano.saldo  // ❌ ERRO

// Chamando método STATIC (pela classe, não pelo objeto).
ContaBancaria.retornaNumeroDoBanco(); // 125
