// obs: instalar o Typescript global;

// 1. Variáveis e Tipos de Dados
let numero: number = 42;
let texto: string = "Olá, Mundo!";
let booleano: boolean = true;

// 2. Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["Alice", "Bob", "Carol"];

// 3. Objetos
let pessoa: { nome: string; idade: number } = { nome: "João", idade: 30 };

// 4. Funções
function somar(a: number, b: number): number {
    return a + b;
}

// 5. Condicionais
if (numero > 50) {
    console.log("Número é maior que 50");
} else {
    console.log("Número é menor ou igual a 50");
}

// 6. Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 7. Interfaces
interface Animal {
    nome: string;
    tipo: string;
}

// 8. Classes
class Pessoa {
    constructor(public nome: string, public idade: number) {}
}

// 9. Herança
class Aluno extends Pessoa {
    constructor(nome: string, idade: number, public matricula: number) {
        super(nome, idade);
    }
}

// 10. Módulos
import { soma } from "./funcoes";
console.log(soma(10, 20));

// 11. Tipos Genéricos
function identidade<T>(valor: T): T {
    return valor;
}

// 12. Promises
const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("Promessa resolvida");
    }, 1000);
});

promise.then(resultado => console.log(resultado));

// 13. Tipagem Union
let nota: number | string = 95;
nota = "A+";

// 14. Tipagem Any
let qualquerCoisa: any = 42;
qualquerCoisa = "Isso é uma string";

// 15. Tipagem Null e Undefined
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

// 16. Operadores Lógicos
const ehMaiorDeIdade = idade >= 18 && idade <= 65;

// 17. Template Strings
const nomeUsuario = "Alice";
console.log(`Bem-vindo, ${nomeUsuario}`);

// 18. Spread Operator
const numeros1 = [1, 2, 3];
const numeros2 = [...numeros1, 4, 5, 6];

// 19. Destructuring
const { nome: nomePessoa, idade: idadePessoa } = pessoa;

// 20. Tipos Enum
enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado,
}

const diaAtual: DiaDaSemana = DiaDaSemana.Quarta;
console.log(`Hoje é ${DiaDaSemana[diaAtual]}`);
               
