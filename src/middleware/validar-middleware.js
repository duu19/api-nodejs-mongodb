const ObjectId = require("mongoose").Types.ObjectId;

const validarLogin = (req, res, next) => {
    let erros = [];
    if(!req.body.email){
        erros.push("email");
    }
    if(!req.body.senha){
        erros.push("senha");
    }

    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos corretamente!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};

const validarUser = (req, res, next) => {
    // array de erros acumulados
    let erros = [];
    if(!req.body.nome){
        erros.push("nome");
    }
    if(!req.body.email){
        erros.push("email");
    }
    if(!req.body.senha){
        erros.push("senha");
    }
    if(!req.body.imagem){
        erros.push("imagem");
    }

    // retornar erros caso precise
    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos corretamente!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};

const validarProdutos = (req, res, next) => {
    let erros = [];

    if(!req.body.pizzaSabor){
        erros.push("pizzaSabor");
    }
    if(!req.body.descricao){
        erros.push("descricao");
    }
    if(!req.body.tamanho){
        erros.push("tamanho");
    }
    if(!req.body.precoUnidade){
        erros.push("precoUnidade");
    }
    if(!req.body.imagem){
        erros.push("imagem");
    }
    if(!req.body.refrigerante){
        erros.push("refrigerante");
    }
    if(!req.body.bordaRecheada){
        erros.push("bordaRecheada");
    }

    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos corretamente!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }

};

const validarCategorias = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: `O "nome" não foi preenchido.`});
    }
    return next();
};

const validarPedidos = (req, res, next) => {
    let erros = [];

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }
    if(!req.body.entrega){
        erros.push("entrega");
    }
    if(req.body.concluido == undefined){
        erros.push("concluido");
    }

    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos corretamente!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};

const validarCarrinhos = (req, res, next) => {
    let erros = [];

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }
    if(!req.body.entrega){
        erros.push("entrega");
    }

    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros}, precisam ser preenchidos corretamente!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};

const validarId = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: "O ID informado não está correto."});
    }
}



module.exports = {
    validarLogin,
    validarUser,
    validarProdutos,
    validarCategorias,
    validarPedidos,
    validarCarrinhos,
    validarId
};