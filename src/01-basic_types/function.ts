type MapStringCallBack = (string: string) => string;

const mapStrings=(array: string[], callbackfn: MapStringCallBack): string[] => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const ACB = mapStrings(abc, (letter) => letter.toLocaleUpperCase());
console.log(ACB);
