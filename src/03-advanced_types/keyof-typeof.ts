// type Rgb = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

type RbgTypeof = typeof coresObj;
type RgbKeysof = keyof RbgTypeof;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduziCor(cor: RgbKeysof, cores: RbgTypeof): string {
  return cores[cor];
}
