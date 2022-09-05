type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const documento: Documento = {
  title: 'The title',
  text: 'The text',
};

//optional channing
console.log(documento.date?.toDateString() ?? 'Date does not exist'); // ?? only triggers on null and undefined
console.log(undefined ?? 'Undefined trigger');
console.log(null ?? 'Null trigger');
console.log(false ?? 'False does not trigger');
console.log(`` ?? 'empety string does not trigger');
