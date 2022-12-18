var idade;

//sempre utilizar return
const calculaIdadeParaDirigir = (idade) => {
  return idade >= 18 ? `Sua idade é de ${idade} anos. Você está apto a tirar a CNH` : `Sua idade é de ${idade} anos. Você não está apto a tirar a CNH.`;
}

console.log(calculaIdadeParaDirigir(18));

var nome = "Bruno";
var sobrenome = "Ito";

var nome_completo = `${nome} ${sobrenome}`;

console.log(nome);
console.log(sobrenome);
console.log(nome_completo);

console.log(nome);
console.log(typeof nome);

console.log(typeof "vá a merda");

console.log(typeof 1988345);

console.log(typeof 1.567);