const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "qual a frase popular do personagem benjamin tenison de ben 10",
        alternativas: [
            {
                t0exto: "Prefiro morrer doque perder a vida",
                afirmacao: "errado"
            },
            {
                texto: "É hora de virar heroi",
                afirmacao: "acertou"
            }
        ]
    },
    {
        enunciado: "qual a frase popular do personagem pirata de bob esponja",
        alternativas: [
            {
                texto: "eu nao ouvi direitoo",
                afirmacao: "acertou"
            },
            {
                texto: "eu tenho a forçaaa",
                afirmacao: "errou"
            }
        ]
    },
    {
        enunciado: "qual a frase popular do personagem super choque de super choque ",
        alternativas: [
            {
                texto: "eu vou dar choque no seu sistema",
                afirmacao: "acertou"
            },
            {
                texto: "nada vale mais que uma amizade idiota",
                afirmacao: "errou"
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