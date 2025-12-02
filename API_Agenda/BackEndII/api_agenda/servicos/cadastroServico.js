import pool from './conexao.js';

export async function cadastraContato(nome, telefone, email) {
    const conexao = await pool.getConnection();
    const sql = 'INSERT INTO contato (nome, telefone, enail) VALUES (?, ?, ?)';
    const [resultado] = await conexao.execute(sql, [nome, telefone, email]);
    console.log(resultado);
    conexao.release();
}