export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaborador(): void {
    this.colaboradores.forEach((colaborador) => console.log(colaborador));
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, private readonly cpf: string) {}
}

const empresa1 = new Empresa('Udemy', '11.1111111/00001-11');
const colaboradores1 = new Colaborador('Erickson', '123.456.789-90');
const colaboradores2 = new Colaborador('Ana', '123.456.789-90');
const colaboradores3 = new Colaborador('Adriana', '123.456.789-90');
empresa1.addColaborador(colaboradores1);
empresa1.addColaborador(colaboradores2);
empresa1.addColaborador(colaboradores3);
empresa1.showColaborador();
console.log(empresa1.getCnpj());
