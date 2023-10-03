import conn from "./index.js";

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
            SELECT ID_PIZZA AS ID,
            NM_PIZZA  AS NOME,
            VL_PRECO  AS PREÇO,
            QTD_QUANTIDADE AS QUANTIDADE,
            DS_INGREDIENTES AS INGREDIENTES,
            DS_FOTO AS FOTO
            FROM TB_PIZZA;
    `  
    let [info] = await conn.query(sql, [pizza.nome,
                                        pizza.preco,
                                        pizza.quantidade,
                                        pizza.ingrediantes,
                                        pizza.foto])

pizza.id = info.InsertId
return pizza

}