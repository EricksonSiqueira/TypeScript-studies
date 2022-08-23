type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Perto'
type CorPreferida = CorRGB | CorCMYK;
