export class Calc {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mult(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalc extends Calc {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calc = new Calc(10);
calc.add(10).mult(2).div(4);
console.log(calc);

const subCalc = new SubCalc(10);
subCalc.sub(5).pow(2);
console.log(subCalc);
