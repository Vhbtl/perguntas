const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual a frase popular do personagem Benjamin Tenison do desenho Ben 10?",
        alternativas: [
            {
                texto: "Prefiro morrer doque perder a vida",
                afirmacao: "A frase é do Chapolin Colorado"
            },
            {
                texto: "É hora de virar heroi",
                afirmacao: "Você conhece de Ben 10!"
            }
        ]
    },
    {
        enunciado: "Qual a frase popular do personagem Pirata do desenho bob esponja?",
        alternativas: [
            {
                texto: "Eu não ouvi direito",
                afirmacao: "Você conhece de Bob Esponja!"
            },
            {
                texto: "Eu tenho a forçaa",
                afirmacao: "A frase é do He-Man"
            }
        ]
    },
    {
        enunciado: "Qual a frase popular do personagem Super Choque do desenho Super Choque ",
        alternativas: [
            {
                texto: "Eu vou dar choque no seu sistema",
                afirmacao: "Você conhece de Super Choque!"
            },
            {
                texto: "Nada vale mais que uma amizade, idiota",
                afirmacao: "Essa frase é de Karl Marx"
            }
        ]
    },
      
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Parabens voçê completou o desafio";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();