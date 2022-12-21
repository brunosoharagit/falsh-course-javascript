var idade = 15;

if(idade >= 18) {
  console.log("Você pode tirar carteira.");
}
else {
  console.log(`Espere mais ${18 - idade} anos kekw.`);
}

const verificaIdade = idade >= 18 ? console.log('Maioridade') : console.log('Menoridade');
console.log(verificaIdade);

var emTeste = true;

console.log("antes do if");

//ao colocar o !emTeste, irá pular a etapa que está dentro do escopo
if(emTeste) {
  console.log("durante o if")
}

console.log("depois do if")