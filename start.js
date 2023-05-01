var listaJogadores = [
  "Andrey",
  "Gabriel Pec",
  "Marlon Gomes",
  "Calleri",
  "Luciano",
  "Gabi Neves",
  "Gabigol",
  "Arrascaeta",
  "Bruno Henrique",
];


listaJogadores.sort(() => Math.random() - 0.5);

console.log(listaJogadores);

let todosJogadores = document.getElementById("Todos-Jogadores");

console.log(todosJogadores);

var transformarTag = [];
for(let jogador of listaJogadores){
    transformarTag.push(`<li>${jogador}</li>`);
}

todosJogadores.innerHTML = transformarTag.join(" ");