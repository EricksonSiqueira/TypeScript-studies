type MyFilterCallBack<T> = (value: T, index?: number, array?: T[]) => boolean;

export const myFilter = <T>(array: T[], callbackfn: MyFilterCallBack<T>): T[] => {
  const newAray: T[] = [];

  array.forEach((value) => {
    if (callbackfn(value)) newAray.push(value);
  });

  return newAray;
};

const arrayTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayTeste2 = ['Alou', 'Que loucurada doidão', 'Isso é doiderada'];

console.log(myFilter(arrayTeste, (value) => value > 6));
console.log(myFilter(arrayTeste2, (value) => value.includes('rada')));
console.log(arrayTeste.filter((value) => value > 6));
console.log(arrayTeste2.filter((value) => value.includes('rada')));
