var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/buscarKpi", function (req, res) {
  kpiController.buscarKpi(res);
});

router.get("/feedback", function (req, res) {
  kpiController.feedback(res);
});

router.get("/numfeedback", function (req, res) {
  kpiController.numfeedback(res);
});

router.delete("/deletar", function (req, res) {
  kpiController.deletar(req, res);
});

router.post("/cadastrar", function (req, res) {
  kpiController.cadastrar(req, res);
})

module.exports = router;