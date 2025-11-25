import pool from './conexao.js';

export async function deletaContato(id) {
    const conexao = await pool.getConnection();
    const sql = 'DELETE FROM contato WHERE id = ?';
    const [resposta] = await conexao.execute(sql, [id]);
    conexao.release();
    return resposta;
    
}