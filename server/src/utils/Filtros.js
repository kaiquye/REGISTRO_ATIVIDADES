class FiltrarPor {
    SQL = '';

    //   FiltrarPor(gerente = null, setor = null, ccusto = null) {
    //     [gerente, setor, ccusto].map((params)=>{
    //         if(params !==)
    //     })
    //   }

    Sql(campos, sqls) {
        for (let i = 1; campos.length >= i; ++i) {
            sqls.map((sql) => {
                console.log(campos[i].campo)
                if (campos[i].campo !== undefined) {
                    if (sql.campo === campos[i].campo) {
                        if (campos[i].valor !== undefined) {
                            this.SQL.concat(sql.sql)
                        } else {
                            console.log('null')
                        }
                    } else {
                        console.log('nao')
                    }
                }
            })
        }
    }

}
module.exports = new FiltrarPor();
