const Produto = require("../model/produto");

// produto específicio
const findProductByIdService = (id) => {
    return Produto.findById(id);
};

// todos produtos
const findAllProductsService = () => {
    return Produto.find();
};

// criar produto
const createProductService = (body) => {
    return Produto.create(body);
};

// editar produto
const updateProductService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

// deletar produto
const deleteProductService = (id) => {
    return Produto.findByIdAndRemove(id);
};

module.exports = {
    findProductByIdService,
    findAllProductsService,
    createProductService,
    updateProductService,
    deleteProductService
};