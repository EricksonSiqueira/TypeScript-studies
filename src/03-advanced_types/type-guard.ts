type Pessoa2 = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa2 | Animal;

class Aluno implements Pessoa2 {
  constructor(public nome: string) {}
}

const mostraNomeDePessoa = (obj: PessoaOuAnimal): string => {
  if ('nome' in obj) return `Nome: ${obj.nome}`; // very usefull
  return 'Objeto passado não é do tipo "Pessoa2"';
};

console.log(mostraNomeDePessoa(new Aluno('Erickson')));
