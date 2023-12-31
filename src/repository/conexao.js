import 'dotenv/config';
import mysql2 from 'mysql2/promise';

const conn = await mysql2.createConnection({
    host:process.env.HOST,
    database:process.env.BD,
    user:process.env.USER,
    password:process.env.PWD
})

console.log("Banco de Dados conectado");

export default conn;