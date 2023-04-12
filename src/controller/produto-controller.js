const produtoService = require("../services/produto-services");

const findProductByIdController = async (req, res) => {
    try{
        res.send(await produtoService.findProductByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const findAllProductsController = async (req, res) => {
    try{
        res.send(await produtoService.findAllProductsService(req.query.limit, req.query.offset));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const createProductController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
        }
        
        // não retornar null
        if (req.body.categorias === undefined) {
            req.body.categorias = { default: undefined }
        };

        res.status(201).send(await produtoService.createProductService(corpo));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const updateProductController = async (req, res) => {
    try{
        res.send(await produtoService.updateProductService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const deleteProductController = async (req, res) => {
    try{
        res.send(await produtoService.deleteProductService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const addCategoriaProductController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.addCategoriaProductService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

const removeCategoriaProductController = async (req, res) => {
    try{
        res.status(200).send(await produtoService.removeCategoriaProductService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: "Houve um erro, tente novamente mais tarde."});
    }
};

module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProductController,
    removeCategoriaProductController
};