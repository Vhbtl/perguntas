const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Em uma prova que ira acontecer, voçê prefere estudar ou colar?",
        alternativas: [
            {
                t0exto: "Prefiro estudar para faze-la",
                afirmacao: "Você tem uma boa nota e aprende sobre o conteúdo"
            },
            {
                texto: "Prefiro colar na hora da prova",
                afirmacao: "Você tem uma boa nota, porém não aprenda nada sobre o conteúdo"
            }
        ]
    },
    {
        enunciado: "Em caso de assalto a sua pessoa como você irá reagir?",
        alternativas: [
            {
                texto: "Eu iria reagir contra o assaltante armardo",
                afirmacao: "Parabéns, você morreu"
            },
            {
                texto: "Eu obedeceria suas ordens durante o assalto",
                afirmacao: "Você sobrevive, porém perde alguns bens"
            }
        ]
    },
    {
        enunciado: "Em uma pandemia de uma certa doença fatal, você continua a frequentar festas e eventos? ",
        alternativas: [
            {
                texto: "Sim  ",
                afirmacao: "Você agiu de forma irresponsável e se contaminou com a doença"
            },
            {
                texto: "Não",
                afirmacao: "Prefiriu evitar o contato com pessoas e passa a pendemia sem se contrair o vírus"
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
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();