const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Em uma prova que haverá na escola, você estuda pra faze-la ou prefere colar na hora da prova? ",
        alternativas: [
            {
                texto: "Prefiro estudar para faze-la",
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