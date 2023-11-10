var listaTitulo = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4', 'Pergunta 5'];
var listaPergunta = ['Quando e por quem foi criado o vôlei?', 'Qual jogador que realiza o saque?']
var listaResposta1 = ['1895, William George Morgan', 'O jogador na posição 6', '']
var listaResposta2 = ['1881, George Cabot', 'O jogador na posição 4']
var listaResposta3 = ['1895, Jamie Metzl', 'O jogador na posição 1']
var listaResposta4 = ['1995, William George Morgan', 'O jogador na posição 2']
var listaImagens = ['../assets/imgs/quiz/pergunta1-quiz.jpg', '../assets/imgs/quiz/pergunta2-quiz.jpg', '../assets/imgs/quiz/pergunta3-quiz2.jpg', '../assets/imgs/quiz/pergunta4-quiz.jpg', '../assets/imgs/quiz/pergunta5-quiz.jpg'];

var repeticao = 1;


function avancarQuiz() {

    if (repeticao <= 4) {

        imagemPergunta.innerHTML = `<img src="${listaImagens[repeticao]}">`

        textoPergunta.innerHTML = `
            <div class="container">
            <div class="tituloContagem">
                <p>${listaTitulo[repeticao]}</p>
                <p id="contagem">${repeticao + 1}/${listaTitulo.length}</p>
            </div>
                <p>${listaPergunta[repeticao]}</p>   
            <div class="btn-respostas">
                <div>${listaResposta1[repeticao]}</div> 
                <div>${listaResposta2[repeticao]}</div> 
                <div>${listaResposta3[repeticao]}</div> 
                <div>${listaResposta4[repeticao]}</div> 
            </div>
            </div>
        `;

        repeticao++
    } else {
        var confirmarEnvio = confirm('Deseja realmente enviar suas respostas?');

        if (confirmarEnvio == true) {
            quiz.innerHTML = '';
        }
    }

    if (repeticao == 5) {
        btn_avancar.innerHTML = `Finalizar tentativa`;
    }

    if (repeticao == 1) {
        btn_voltar.style.display = 'none';
    } else {
        btn_voltar.style.display = 'flex';
        btn_voltar.innerHTML = `Voltar`;
    }

}

function voltarQuiz() {
    repeticao--

    if (repeticao == 1) {
        btn_voltar.style.display = 'none';
    } else {
        btn_avancar.innerHTML = `Avançar`;

        btn_voltar.style.display = 'flex';
    }

    if (repeticao > 0) {

        imagemPergunta.innerHTML = `<img src="${listaImagens[repeticao - 1]}">`

        textoPergunta.innerHTML = `
                <div class="container">
                <div class="tituloContagem">
                    <p>${listaTitulo[repeticao - 1]}</p>
                    <p id="contagem">${repeticao}/${listaTitulo.length}</p>
                </div>
                    <p>${listaPergunta[repeticao - 1]}</p>   
                <div class="btn-respostas">
                    <div>${listaResposta1[repeticao - 1]}</div> 
                    <div>${listaResposta2[repeticao - 1]}</div> 
                    <div>${listaResposta3[repeticao - 1]}</div> 
                    <div>${listaResposta4[repeticao - 1]}</div> 
                </div>
                </div>
            `;


    }
}