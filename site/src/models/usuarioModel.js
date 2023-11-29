var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)

    var instrucao1 = `
        SELECT idUsuario, nome, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1);
    return database.executar(instrucao1);
    
    // var instrucao2 = `
    //     SELECT count(idUsuario) total_usuarios FROM usuario
    // `
    // console.log("Executando a instrução SQL: \n" + instrucao2);
    // return database.executar(instrucao2);

    // var instrucao3 = `
    //     select avg(TIMESTAMPDIFF(YEAR, dtNasc, now())) as media_idade from usuario;
    // `
    // console.log("Executando a instrução SQL: \n" + instrucao3);
    // return database.executar(instrucao3);

    // var instrucao4 = `
    //     select round(avg(pontuacao)) media_pontos from resultadoQuiz;
    // `
    // console.log("Executando a instrução SQL: \n" + instrucao4);
    // return database.executar(instrucao4);

}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, dataNasc, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, dtNasc, senha) VALUES ('${nome}', '${email}', '${dataNasc}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};