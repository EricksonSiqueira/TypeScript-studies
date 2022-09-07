const myArray: Array<number> = [1, 2, 3, 4];

const myPromise = async <T>(array: T[]) => {
  return array;
};

myPromise(myArray).then((value) => console.log(value));

const myPromise2 = (timeout: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, timeout);
  });
};

myPromise2(3000).then((value) => console.log(value));
