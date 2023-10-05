import express from 'express';
import endpoints from './controller/pizzariaControler.js';

const server = express();

server.use(express.json());
server.use(endpoints);

server.listen(process.env.PORT, () => console.log("Api subiu na porta " + process.env.PORT));