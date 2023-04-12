// categorias
const categoriaService = require("../services/categoria-services");

const findCategoriaByIdController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const findAllCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findAllCategoriaService(req.query.limit, req.query.offset));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const createCategoriaController = async (req, res) => {
    try{
        res.status(201).send(await categoriaService.createCategoriaService(req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const updateCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const deleteCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

module.exports = {
    findCategoriaByIdController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
};