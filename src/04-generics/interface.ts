interface Person<T = string, U = number> {
  //default value :O
  name: T;
  lastname: T;
  age: U;
}
type Person2<T = string, U = number> = {
  //default value :O
  name: T;
  lastname: T;
  age: U;
};

const student: Person<string, string> = {
  name: 'Altabaldo',
  lastname: 'Josaias',
  age: '90',
};

const student2: Person2<string, string> = {
  name: 'Altabaldo',
  lastname: 'Josaias',
  age: '90',
};

console.log(student);
console.log(student2);
