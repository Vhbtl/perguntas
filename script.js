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
                texto: "Prefiro morrer do que perder a vida!",
                afirmacao: "A frase é do Chapolin Colorado."
            },
            {
                texto: "É hora de virar heroi!",
                afirmacao: "Você é burro de mais !"
            }
        ]
    },
    {
        enunciado: "Qual a frase popular do personagem Pirata do desenho Bob Esponja?",
        alternativas: [
            {
                texto: "Eu não ouvi direito!",
                afirmacao: "Você conhece de Bob Esponja!"
            },
            {
                texto: "Eu tenho a força!",
                afirmacao: "Você é burro de mais "
            }
        ]
    },
    {
        enunciado: "Qual a frase popular do personagem Super Choque do desenho Super Choque?",
        alternativas: [
            {
                texto: "Eu vou dar choque no seu sistema!",
                afirmacao: "Você é burro de mais "
            },
            {
                texto: "Nada vale mais que uma amizade, idiota.",
                afirmacao: "Você é burro de mais ."
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