type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) {
    return args.reduce((acc, arg) => acc + arg, 0) + x + (y || 0);
  }

  return x + (y || 0);
};

console.log(adder(10, 5));
console.log(adder(10, 5, 10));
console.log(adder(10));
