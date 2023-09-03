// 1. Enum
enum DiasDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado,
}

let dia: DiasDaSemana = DiasDaSemana.Quarta;

// 2. Tipos de Union
let numeroOuString: number | string;
numeroOuString = 42;
numeroOuString = "Quarenta e dois";

// 3. Tipos de Interseção
type Pessoa = { nome: string };
type Endereco = { endereco: string };
type Cliente = Pessoa & Endereco;

let cliente: Cliente = { nome: "Alice", endereco: "Rua A" };

// 4. Type Aliases
type Coordenadas = [number, number];
let ponto: Coordenadas = [10, 20];

// 5. Classes Abstratas
abstract class Animal {
    abstract fazerSom(): void;
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Woof!");
    }
}

// 6. Métodos Estáticos
class Matematica {
    static somar(a: number, b: number): number {
        return a + b;
    }
}

let resultado = Matematica.somar(5, 7);

// 7. Generics
function imprimirArray<T>(arr: T[]): void {
    for (let elemento of arr) {
        console.log(elemento);
    }
}

imprimirArray([1, 2, 3]);
imprimirArray(["a", "b", "c"]);

// 8. Tipos de Tupla
let pessoaInfo: [string, number] = ["João", 30];

// 9. Modificadores de Acesso
class Carro {
    private modelo: string;

    constructor(modelo: string) {
        this.modelo = modelo;
    }

    getInfo(): string {
        return `Modelo: ${this.modelo}`;
    }
}

let carro = new Carro("Sedan");
// console.log(carro.modelo); // Isso resultaria em erro

// 10. Tipos Never
function lancaErro(mensagem: string): never {
    throw new Error(mensagem);
}

// 11. Type Assertion
let valorDesconhecido: any = "Isso é uma string";
let tamanhoString: number = (valorDesconhecido as string).length;

// 12. Namespaces
namespace Geometria {
    export function calcularArea(largura: number, altura: number): number {
        return largura * altura;
    }
}

let areaRetangulo = Geometria.calcularArea(5, 10);

// 13. Módulos
import { soma } from "./funcoes";

// 14. Event Emitters
import { EventEmitter } from "events";
const meuEmitter = new EventEmitter();

meuEmitter.on("evento", () => {
    console.log("Evento disparado!");
});

meuEmitter.emit("evento");

// 15. Decorators
function log(classe: any) {
    console.log(classe);
}

@log
class Exemplo {}

// 16. Callbacks
function executarOperacao(num1: number, num2: number, callback: (result: number) => void) {
    const resultado = num1 + num2;
    callback(resultado);
}

executarOperacao(10, 20, (resultado) => {
    console.log(`O resultado é ${resultado}`);
});

// 17. Type Guards
function verificarTipo(x: number | string): void {
    if (typeof x === "number") {
        console.log("É um número.");
    } else if (typeof x === "string") {
        console.log("É uma string.");
    }
}

// 18. Promises
function fazerAlgo(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Feito!");
        }, 1000);
    });
}

fazerAlgo().then((resultado) => {
    console.log(resultado);
});

// 19. Async/Await
async function exemploAsync() {
    let resultado = await fazerAlgo();
    console.log(resultado);
}

exemploAsync();

// 20. Tipos Condicionais
type Opcao<T> = T extends string ? "String" : "Outro";
let tipoString: Opcao<string> = "String";
let tipoNumero: Opcao<number> = "Outro";

// 21. Mapas
let mapa: Map<string, number> = new Map();
mapa.set("um", 1);
mapa.set("dois", 2);

// 22. Sets
let conjunto: Set<number> = new Set();
conjunto.add(1);
conjunto.add(2);

// 23. Symbols
const chaveUnica = Symbol("chave");
let objeto = {
    [chaveUnica]: "Valor da chave única",
};

// 24. Iteradores
let numerosArray = [1, 2, 3];
let iterador = numerosArray[Symbol.iterator]();

for (let num of iterador) {
    console.log(num);
}

// 25. Tipos Literal
let diaDaSemana: "Segunda" | "Terça" | "Quarta" = "Segunda";

// 26. Tipos Enumerados
enum TamanhoCamiseta {
    Pequeno = "S",
    Medio = "M",
    Grande = "L",
}

let tamanho: TamanhoCamiseta = TamanhoCamiseta.Medio;

// 27. Extensão de Protótipos
Array.prototype.meuMap = function(callback: Function) {
    let resultado = [];
    for (let i = 0; i < this.length; i++) {
        resultado.push(callback(this[i], i, this));
    }
    return resultado;
};

let numerosDobrados = [1, 2, 3].meuMap((num: number) => num * 2);

// 28. Manipulação de Data
let dataAtual = new Date();
let diaAtual = dataAtual.getDate();

// 29. Recursão
function fatorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

let resultadoFatorial = fatorial(5);

// 30. Fetch API
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data));

// 31. Tipos Opcionais
type PessoaComSobrenome = {
    nome: string;
    sobrenome?: string;
};

let pessoa1: PessoaComSobrenome = { nome: "Alice" };
let pessoa2: PessoaComSobrenome = { nome: "Bob", sobrenome: "Smith" };
