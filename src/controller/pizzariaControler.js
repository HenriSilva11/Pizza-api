import { Consultar } from "../repository/repositoryPizza.js";

import { Router } from "express";

let endpoints = Router()

endpoints.post('/consultar', async (req, resp) => {
    try{
        let pizza = req.body

        let resposta = await Consultar(pizza)
        resp.send(resposta)
    }

    catch (err){
        resp.status(500).send({err: 'ocorreu um erro!'})
    }
    
})