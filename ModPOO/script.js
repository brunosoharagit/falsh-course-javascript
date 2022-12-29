const Distribuidora = class Distribuidora {
  constructor(nome) {
    this.nome = nome;
  }
}

const cpfl1 = new Distribuidora("CPFL Paulista");
const elektro1 = new Distribuidora("Elektro");

console.log(cpfl1);
console.log(elektro1);