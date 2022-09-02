type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

// mirroring object

const carro: Car = {
  brand: 'Ford',
  year: '2022',
  name: 'Nome',
};
