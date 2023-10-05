import { Consultar , Adicionarpizza, deletarPizza, alterarPizza} from "../repository/repositoryPizza.js";

import { Router } from "express";

let endpoints = Router()

endpoints.get('/pizza', async (req, resp) => {
    try{
        let pizza = req.body

        let resposta = await Consultar(pizza)
        resp.send(resposta)
    }

    catch (err){
        resp.status(500).send({err: 'ocorreu um erro!'})
    }
    
})

endpoints.post('/pizza', async (req, resp) => {
    try{
        let pizza = req.body
        let resposta = await Adicionarpizza(pizza)
        resp.send(resposta)
    }

    catch(err){
        resp.status(500).send({err: 'ocorreu um erro'})
    }
})

endpoints.delete('/pizza/:id', async (req, resp) => {
    try {
        let {id} = req.params;
        let resposta = await deletarPizza(id);
        
        if(resposta !== 1) 
            throw new Error('Não foi possível deletar a pizza.')

        resp.status(204).send();
    }

    catch(err){
        resp.status(500).send({err: 'ocorreu um erro'})
    }
})

endpoints.put('/pizza/:id', async (req, resp) => {
    try{
        let {id} = req.params;
        let newPizza = req.body;
        let resposta = await alterarPizza(id, newPizza);
        
        if(resposta !== 1) 
            throw new Error('Não foi possível deletar a pizza.')

        resp.status(204).send();
    }

    catch(err){
        resp.status(500).send({err: 'ocorreu um erro'})
    }
})

export default endpoints;