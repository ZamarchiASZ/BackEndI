import pool from "./conexao.js"

//função para buscar po id
export async function buscarContatoPorId(id) {
    const conexao = await pool.getConnection();
    const sql = "SELECT * FROM contato WHERE id = ? "; //uso de placeholders
    const [resultado] = await conexao.execute(sql, [id]); //uso de prepared statement
    conexao.release();
    return resultado
};

//função para buscar todos os contatos
export async function bsucarTodosContatos() {
    const conexao = await pool.getConnection();
    const sql = "SELECT * FROM contato";
    const [resultado] = await conexao.execute(sql);
    conexao.release();
    return resultado;

}