import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'agenda2a',
    password: 'A503814@',
    database: 'agenda'
});

export default pool;