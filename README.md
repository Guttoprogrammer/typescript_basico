# 📘 Estudos de TypeScript

Repositório dedicado aos meus estudos de **TypeScript**, com exemplos práticos, pequenos exercícios e trechos de código explicando conceitos fundamentais da linguagem.
Todo o conteúdo aqui foi criado durante minhas aulas práticas, e serve como material de consulta e revisão futura.

---

## 🧠 Objetivo do Repositório

Este repositório existe para:

* Organizar e revisar conceitos fundamentais do TypeScript
* Acompanhar minha evolução na linguagem
* Servir como referência para projetos futuros
* Guardar exemplos práticos que realmente me ajudaram a entender cada tema

---

## 📂 Estrutura dos Arquivos

Abaixo está uma explicação clara de cada arquivo e o que ele representa dentro dos meus estudos:

### **1. `tipos_basicos.ts`**

Introdução aos tipos primitivos do TypeScript:

* string
* number
* boolean
* any
* unknown
* void / null / undefined

Também aborda tipagem explícita, inferência e boas práticas.

---

### **2. `tipos_customizados.ts`**

Estudos sobre:

* Type alias (`type`)
* Union types
* Intersection types
* Narrowing
* Objetos tipados

Serve como base para escrever estruturas mais organizadas.

---

### **3. `interface.ts`**

Demonstra:

* Criação de interfaces
* Diferenças entre `type` e `interface`
* Extensão de interfaces
* Implementação em classes

---

### **4. `funcoes.ts`**

Exemplos sobre funções tipadas:

* Tipagem de parâmetros
* Tipagem de retorno
* Parâmetros opcionais
* Parâmetros default
* Funções assíncronas tipadas
* Arrow functions vs funções tradicionais

---

### **5. `casting.ts`**

Arquivo dedicado ao famoso *Type Casting* (Type Assertions):

* Uso de `as`
* Uso de `<T>`
* Riscos envolvidos
* Casting forçado com `unknown`
* Exemplos:

```ts
let idade: any = 25;
(idade as number).toFixed();

let nome: string = 35 as unknown as string;
```

Também contém exemplos errados de propósito para fins didáticos.

---

### **6. `dom.ts`**

Manipulação de elementos do DOM com TypeScript:

* Cast seguro com `as HTMLInputElement`
* Verificação de null (`if (elem)` | `?`)
* Eventos tipados
* Problemas comuns ao trabalhar com o DOM no TS

---

### **7. `oo.ts`**

Princípios de Programação Orientada a Objetos em TypeScript:

* Classes
* Construtores
* Modificadores (`public`, `private`, `protected`)
* Herança
* Métodos
* Override / super

---

### **8. `teste.ts`**

Arquivo usado para testes gerais, pequenos experimentos e validações de comportamento.

---

## 🛠️ Tecnologias Usadas

* TypeScript
* Node.js (opcional, para executar os exemplos)
* VS Code

---

## 🚀 Como executar os arquivos

1. Instale dependências (caso existam no futuro):

```
npm install
```

2. Compile os arquivos TS:

```
npx tsc
```

3. Execute o JS gerado:

```
node ./nome-do-arquivo.js
```

---

## 📝 Notas Finais

Esse repositório representa minha jornada aprendendo TypeScript.
A ideia é continuar expandindo com novos módulos, exercícios e conceitos mais avançados conforme eu evoluir.

Sinta-se livre para acompanhar minha evolução ou usar estes exemplos como base para seus próprios estudos.

---
