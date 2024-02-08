const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",   
        "Comparação solta de valor e tipo",
        "Atribuição de valor",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "let myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento Orientado a Mensagens",
        "Modelo de Objeto Distribuído",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener'?",
      respostas: [
        "Remover um evento",
        "Adicionar um evento",
        "Modificar um evento",
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 10; i++) {}",
        "loopFor (let i = 0; i < 10; i++) {}",
        "for (i = 0; i < 10; i++) {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma diferença, são sinônimos",
        "'let' é usado para variáveis mutáveis, 'const' para variáveis imutáveis",
        "'const' é usado para variáveis globais, 'let' para variáveis locais",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de dados para intercâmbio",
        "Um método de manipulação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza a impressão no console em JavaScript?",
      respostas: [
        "print('Hello, World!');",
        "console.log('Hello, World!');",
        "write('Hello, World!');",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função callback em JavaScript?",
      respostas: [
        "Uma função que chama outra função",
        "Uma função que retorna um valor",
        "Uma função que é passada como argumento para outra função",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'undefined' e 'null' em JavaScript?",
      respostas: [
        "São equivalentes e podem ser usados indistintamente",
        "'undefined' representa a ausência de valor atribuído, 'null' é atribuído explicitamente",
        "'null' representa a ausência de valor atribuído, 'undefined' é atribuído explicitamente",
      ],
      correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas


for(let item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta =  event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta) {
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

//coloca a pergunta em tela
  quiz.appendChild(quizItem)
}