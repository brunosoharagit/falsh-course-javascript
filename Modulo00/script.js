document.write("Olá Mundo");

const caracteristicas = ["Tipagem Fraca", "OOP", "Imperativa", "Funcional"];

const utilizacoes = ["Manipulação de elementos e estilos na página", "Criação de eventos em uma página", "Aplicação no backend (NodeJS)"];

caracteristicas.forEach(caracteristica => {
  console.log(`${caracteristica}`);
});

console.log(`\n`);

utilizacoes.forEach(utilizacao => {
  console.log(`${utilizacao}`);
});

alert(caracteristicas);