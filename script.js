// Lista de jogadores para cada time
var jogadoresVasco = ["Andrey", "Gabriel Pec", "Marlon Gomes"];
var jogadoresSaoPaulo = ["Calleri", "Luciano", "Gabi Neves"];
var jogadoresFlamengo = ["Gabigol", "Arrascaeta", "Bruno Henrique"];

// Variáveis globais
var timeSelecionado = "";
var jogadoresDoTime = [];
var pontos = 0;
var contadorJogadores = 0;

// Função para obter o valor selecionado no dropdown
function selecionarTime() {
	timeSelecionado = document.getElementById("select-time").value;
	switch (timeSelecionado) {
		case "vasco":
			jogadoresDoTime = jogadoresVasco;
			break;
		case "sao-paulo":
			jogadoresDoTime = jogadoresSaoPaulo;
			break;
		case "flamengo":
			jogadoresDoTime = jogadoresFlamengo;
			break;
		default:
			alert("Por favor, selecione um time.");
			break;
	}
}

function verificarJogador() {
	var nomeJogador = document.getElementById("input-jogador").value;
  
	if (jogadoresDoTime.indexOf(nomeJogador) !== -1) {
	  pontos++;
	  document.getElementById("resultado").innerHTML = `Acertou! Você ganhou ${pontos} ponto.`;
	} else {
	  document.getElementById("resultado").innerHTML = "Errou! Tente novamente.";
	}
  
	contadorJogadores++;
	document.getElementById("input-jogador").value = "";
  
	if (contadorJogadores === 3) {
	  document.getElementById("btn-verificar").style.display = "none";
	  document.getElementById("btn-recomecar").style.display = "block";
	  
	  // atualiza a pontuação depois da verificação do contador de jogadores
	  if (pontos === 0) {
		document.getElementById("resultado").innerHTML = "Fim do Jogo. Você não fez nenhum ponto.";
	  } else {
		document.getElementById("resultado").innerHTML = "Fim do jogo. Você fez " + pontos + " ponto(s).";
	  }
	  
	  if (pontos === 0) {
		document.getElementById("resultado").innerHTML += " Você não é torcedor desse time.";
	  } else if (pontos === 1) {
		document.getElementById("resultado").innerHTML += " Você deve aprender mais sobre seu time.";
	  } else if (pontos === 2) {
		document.getElementById("resultado").innerHTML += " Você é um torcedor mediano.";
	  } else {
		document.getElementById("resultado").innerHTML += " Você é um torcedor de verdade.";
	  }
	}
  }

// Função para iniciar o quiz
function iniciarQuiz() {
	selecionarTime();
	if (timeSelecionado !== "") {
	  document.getElementById("nome-time").innerHTML = timeSelecionado.toUpperCase();
	  document.getElementById("quiz-container").style.display = "block";
	  document.getElementById("btn-iniciar").style.display = "none";
	}
  }

  function recomecarQuiz() {
    document.getElementById("input-jogador").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("btn-verificar").style.display = "block";
    document.getElementById("btn-recomecar").style.display = "none";
    pontos = 0;
    contadorJogadores = 0; // redefinir o contador para 0
	location.reload();
    selecionarTime();
    iniciarQuiz();
	
}

