import conn from "./conexao.js";

export async function Consultar(){
    let sql = `
    SELECT ID_PIZZA AS ID,
       NM_PIZZA  AS NOME,
       VL_PRECO  AS PREÇO,
       QTD_QUANTIDADE AS QUANTIDADE,
       DS_INGREDIENTES AS INGREDIENTES,
       DS_FOTO AS FOTO
       FROM TB_PIZZA;
    `

    let [dados] = await conn.query(sql)
    return dados;
}

export async function Adicionarpizza(pizza){
    let sql = `
        INSERT INTO TB_PIZZA (NM_PIZZA, VL_PRECO, QTD_QUANTIDADE, DS_INGREDIENTES, DS_FOTO)
        VALUES(?, ?, ?, ?, ?);
    `  
    let [info] = await conn.query(sql, [pizza.nome,
                                        pizza.preco,
                                        pizza.quantidade,
                                        pizza.ingredientes,
                                        pizza.foto])

    pizza.id = info.insertId;
    return pizza
}

export async function deletarPizza(id) {
    let sql = `
        DELETE FROM TB_PIZZA
         WHERE ID_PIZZA = ?
    `

    let [resp] = await conn.query(sql, [id]);

    return resp.affectedRows;
}

export async function alterarPizza(id, newPizza) {
    let sql = `
        UPDATE TB_PIZZA
           SET NM_PIZZA         = ?,
               VL_PRECO         = ?,
               QTD_QUANTIDADE   = ?,
               DS_INGREDIENTES  = ?,
               DS_FOTO          = ?
         WHERE ID_PIZZA         = ? 
    `

    let [resp] = await conn.query(sql, [newPizza.nome,
                                        newPizza.preco,
                                        newPizza.quantidade,
                                        newPizza.ingredientes,
                                        newPizza.foto, 
                                        id]);

    return resp.affectedRows;
}