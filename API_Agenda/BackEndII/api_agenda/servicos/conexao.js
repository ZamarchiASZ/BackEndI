import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'A503814@',
    database: 'agenda2a'
});

export default pool