var kpiModel = require("../models/kpiModel");

function buscarKpi(res) {

  kpiModel.buscarKpi()
    .then((resultado) => {

      console.log(`\nResultados encontrados: ${resultado.length}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

      if (resultado.length == 1) {
        // res.status(200).json(resultado);
        console.log(resultado);

        res.json({
          totalUsuarios: resultado[0].total_usuarios,
          idadeMedia: resultado[0].media_idade,
          acertosMedia: resultado[0].media_pontos,
          numFeedbacks: resultado[0].numFeedbacks
        });

      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as informações: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function numfeedback(res) {

  kpiModel.numfeedback()
    .then((resultado) => {

      console.log(`\nResultados encontrados: ${resultado.length}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

      if (resultado.length == 1) {
        // res.status(200).json(resultado);
        console.log(resultado);

        res.json({
          numFeedbacks: resultado[0].numFeedbacks
        });

      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as informações: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


function feedback(res) {

  kpiModel.feedback(res)
    .then((resultado) => {

      console.log(`\nResultados encontrados: ${resultado.length}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

      if (resultado.length > 0) {
        res.status(200).json(resultado);
        console.log(resultado);

      } else {
        res.status(204).send("Nenhum resultado encontrado!")
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as informações: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    aquarioModel.cadastrar(descricao, idUsuario)
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

function deletar(req, res) {
  var idFeedback = req.body.idFeedbackServer;

  kpiModel.deletar(idFeedback)
      .then(
          function (resultado) {
              res.json(resultado);
          }
      )
      .catch(
          function (erro) {
              console.log(erro);
              console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          }
      );
}

module.exports = {
  buscarKpi,
  cadastrar,
  feedback,
  numfeedback,
  deletar
}