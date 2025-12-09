import pool from "./conexao.js";

//Função para buscar um contato específico pelo ID
export async function buscaContatoPorId(id) {
    const conexao = await pool.getConnection();
    const sql = "SELECT * FROM contato WHERE id = ?"; //placeholders
    const [resultado] = await conexao.execute(sql,[id]); //prepared statement
    conexao.release();
    return resultado;
}

//Função para buscar todos os cantatos
export async function buscaTodosContatos() {
    const conexao = await pool.getConnection();
    const sql = "SELECT * FROM contato";
    const [resultado] = await conexao.execute(sql);
    conexao.release();
    return resultado;    
}