type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Perto'
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Erickson',
  idade: 24,
  salario: 10000,
  corPreferida: "Azul",
}

export const setCorPreferida = (pessoa: Pessoa, cor: CorPreferida): Pessoa => ({
  ...pessoa,
  corPreferida: cor,
});

console.log(setCorPreferida(pessoa, 'Perto'))

