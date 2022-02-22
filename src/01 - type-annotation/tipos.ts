/* eslint-disable */

// Primitivos

let nome: string = 'Luiz'; // qualquer strung
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //true ou false
let sumbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
const arrayDeNumeros: Array<number> = [2, 3, 4, 5];
const arrayDeNumeros2: number[] = [2, 3, 4, 5];
const arrayDeStrings: Array<string> = ['a', 'b'];
const arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Erickson',
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
};

const soma2: (x: number, y:number ) => number = (x, y) => x + y;

const result = soma(2, 2) // ele infere automaticamente result como number

