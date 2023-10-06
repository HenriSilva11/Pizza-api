import express from 'express';
import endpoints from './controller/pizzariaControler.js';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors())
server.use(endpoints);

server.listen(process.env.PORT, () => console.log("Api subiu na porta " + process.env.PORT));