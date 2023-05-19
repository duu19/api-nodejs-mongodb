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

// corrigir
const validarEnderecos = (req, res, next) => {
    let erros = [];

    req.body.map((value, key) => {
        if(!value.rua){
            erros.push(`"${key+1} - rua"`)
        }
        if(!value.numero){
            erros.push(`"${key+1} - numero"`)
        }
        if(!value.CEP){
            erros.push(`"${key+1} - CEP"`)
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
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

// favs
const validarIdParams = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: "O ID informado não está correto."});
    }
}

const validar_IdBody = (req, res, next) => {
    if(ObjectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({ message: "O ID informado não está correto."});
    }
}

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

const validarProdutosCarrinhoPedido = (req, res, next) => {
    let erros = [];

    req.body.produtos.map((value, key) => {
        if(!value._id){
            erros.push(`"${key+1} - _id"`)
        }
        if(!ObjectId.isValid(value._id)){
            erros.push(`"${key+1} - _id - inválido"`)
        }
        if(!value.quantidade){
            erros.push(`"${key+1} - quantidade"`)
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
};

module.exports = {
    validarLogin,
    validarUser,
    validarEnderecos,
    validarProdutos,
    validarIdParams,
    validar_IdBody,
    validarCategorias,
    validarPedidos,
    validarCarrinhos,
    validarProdutosCarrinhoPedido
};