import pool from "./conexao.js";

export async function atualizaContato(id, nome, telefone, email) {
    const conexao = await pool.getConnection();
    const sql = 'UPDATE contato SET nome = ?, telefone = ?, email = ? WHERE id = ?';

    const [resposta] = await conexao.execute(sql, [nome, telefone, email, id]);
    console.log(resposta); //imprime a resposta no console
    conexao.release();
    return resposta;    
}

export async function atualizaContatoParcial(id, campos) {
    const conexao = await pool.getConnection();

    //Construção dinâmica da query SQL
    const colunas = Object.keys(campos).map(campo => `${campo} = ?`).join(", ");
    const valores = Object.values(campos);

    const sql = `UPDATE contato SET ${colunas} WHERE id = ?`;
    valores.push(id); //Adiciona o id ao final 

    const [resposta] = await conexao.execute(sql, valores)
    //console.log(resposta);
    conexao.release();
    return resposta;
}
