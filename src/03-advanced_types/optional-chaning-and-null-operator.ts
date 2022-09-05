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
console.log(documento.date?.toDateString());
