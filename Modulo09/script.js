var idade = 19;
var nome = 'Felipe';

if(nome == 'Bruno' && idade >= 18) {
  console.log('Acesso permitido.');
}
else {
  console.log('Acesso negado.');
}

if(nome == 'Bruno' || idade >= 18) {
  console.log('Acesso permitido.');
}
else {
  console.log('Acesso negado.');
}