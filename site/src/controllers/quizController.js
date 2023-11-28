var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
  var pontuacao = req.body.pontosServer;
  var idUsuario = req.body.idUsuarioServer;

  if (pontuacao == undefined) {
    res.status(400).send("pontuação está undefined!");
  } else {
    quizModel.cadastrar(pontuacao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  cadastrar,
};
