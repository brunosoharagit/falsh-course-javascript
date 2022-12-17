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