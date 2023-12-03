var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = `
        select TIMESTAMPDIFF(YEAR, dtNasc, now()) AS idade, 
            round(avg(pontuacao)) mediaPontos 
        from resultadoQuiz 
        join usuario on fkUsuario = idUsuario group by idade order by idade desc
    `;
    // select 
    // dht11_temperatura as temperatura, 
    // dht11_umidade as umidade,
    //                 momento,
    //                 DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
    //             from medida
    //             where fk_aquario = ${idAquario}
    //             order by id desc limit ${limite_linhas};

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas
}
