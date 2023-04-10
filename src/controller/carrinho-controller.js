const carrinhoService = require("../services/carrinho-services");

const findCarrinhoByIdController = async (res, req) => {
    try{
        res.status(200).send(await carrinhoService.findCarrinhoByIdService(req.params.id));
    }catch(err){
        res.status(500).send({ message: "Ocorreu um erro, tente novamente mais tarde."});
        console.log(err.message);
    }
};

const findAllCarrinhosController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.findAllCarrinhosService());
    }catch(err){
        res.status(500).send({ message: "Ocorreu um erro, tente novamente mais tarde."});
        console.log(err.message);
    }
};

const createCarrinhoController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
        }
        res.status(201).send(await carrinhoService.createCarrinhoService(req.params.id, corpo));
    }catch(err){
        res.status(500).send({ message: "Ocorreu um erro, tente novamente mais tarde."});
        console.log(err.message);
    }
};

const updateCarrinhoController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));
    }catch(err){
        res.status(500).send({ message: "Ocorreu um erro, tente novamente mais tarde."});
        console.log(err.message);
    }
};

const removeCarrinhoController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.removeCarrinhoService(req.params.id));
    }catch(err){
        res.status(500).send({ message: "Ocorreu um erro, tente novamente mais tarde."});
        console.log(err.message);
    }
};

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhosController,
    createCarrinhoController,
    updateCarrinhoController,
    removeCarrinhoController
};
