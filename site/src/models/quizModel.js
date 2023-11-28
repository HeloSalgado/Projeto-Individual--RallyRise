var database = require("../database/config");

function cadastrar(pontuacao, idUsuario) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastar(): ", pontuacao);

  var instrucao = `insert into resultadoQuiz (pontuacao, fkUsuario) values ('${pontuacao}', '${Number(idUsuario)}')`
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
   cadastrar
};
