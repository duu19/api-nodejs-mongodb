const pedidoService = require("../services/pedido-services");

const findPedidoByIdController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id));
        console.log("teste");
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde123."});
    }
};

const findAllPedidosController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findAllPedidosByIdService());
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const createPedidoController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.status(201).send(await pedidoService.createPedidoService(corpo));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const removePedidoController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.removePedidoService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

module.exports = {
    findPedidoByIdController,
    findAllPedidosController,
    createPedidoController,
    removePedidoController
};