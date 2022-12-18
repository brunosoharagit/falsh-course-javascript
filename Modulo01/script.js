var nome = "Bruno";
var idade = 26;
var altura = 1.72;
var generosFavoritos = ['Trap', 'Indie', 'Rock', 'Lofi', 'Acoustic'];

var usuario = {
 nome: nome,
 idade: idade,
 endereco: {
  rua: 'Rua das Berinjelas',
  numero: 123,
  bairro: 'Cidade das Maravilhas',
  cidade: 'Piroca Roxa',
  estado: 'PNC',
 }
}

var fazerCalculos = () => {
  return idade + 1.02;
}

console.log(fazerCalculos());

var numero = 1.044;
var _nome = "João";

console.log(numero);

numero = '1';

console.log(numero);
console.log(_nome);
console.log(typeof(_nome));

var graus = 0;

const verificaTemperatura = (graus) => {

  graus > 0 ? "Temperatura acima de 0ºC" : "Temperatura abaixo de 0ºC";
}

console.log(verificaTemperatura(94));