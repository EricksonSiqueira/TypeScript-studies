type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade // com nome ou idade ou sobrenome

type PessoaAnd = TemNome & TemSobrenome & TemIdade // com nome e idade e sobrenome

const pessoa2: Pessoa = {
  nome: 'Erickson',
  sobrenome: 'Erickson',
  idade: 24,
}

const pessoa3: PessoaAnd = {
  nome: 'Erickson',
  sobrenome: 'Siqueira',
  idade: 24,
}
