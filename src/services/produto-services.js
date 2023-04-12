const Categoria = require("../model/categoria");
const Produto = require("../model/produto");

// produto específicio
const findProductByIdService = (id) => {
    return Produto.findById(id);
};

// todos produtos
const findAllProductsService = (limit, offset) => {
    return Produto.find().limit(limit).skip(offset);
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

const addCategoriaProductService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id : id
        },
        {
            $push: {
                categoria: {
                    _id: categoria._id,
                    createdAt: categoria.createAt
                },
            },
        },
        {
            rawResult: true,
        }
    );
}

// corrigir 
const removeCategoriaProductService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                categoria: {
                    _id: categoria._id,
                },
            },
        },
        {
            rawResult: true,
        },
    );
}

module.exports = {
    findProductByIdService,
    findAllProductsService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProductService,
    removeCategoriaProductService
};