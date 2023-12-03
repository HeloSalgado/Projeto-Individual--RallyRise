var database = require("../database/config");

function buscarKpi(res) {

  instrucaoSql = `
    SELECT count(idUsuario) total_usuarios, round(avg(TIMESTAMPDIFF(YEAR, dtNasc, now()))) as media_idade,  round(avg(pontuacao)) media_pontos 
	      FROM usuario join resultadoQuiz on fkUsuario = idUsuario
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function numfeedback(res) {

  instrucaoSql = `
    SELECT count(idFeedback) numFeedbacks from feedback
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function feedback(res) {

  instrucaoSql = `
    select idFeedback, nome, titulo, descricao from usuario join feedback on fkUsuario = idUsuario
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {

  instrucaoSql = `insert into (descricao, fk_empresa) aquario values (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idFeedback) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idFeedback);
  var instrucao = `
      DELETE FROM feedback WHERE idFeedback = ${idFeedback};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  buscarKpi,
  cadastrar,
  feedback,
  numfeedback,
  deletar
}
