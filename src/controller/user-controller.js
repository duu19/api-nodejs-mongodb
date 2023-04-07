const userService = require("../services/user-services");

// funções do controller

// buscar usuário específico
const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({message: "Usuário não encontrado."})
        }

        return res.status(200).send(user);
        
    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: "ID incorreto, informe um ID existente."});
        }

        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// buscar todos usuários no banco
const findAllUsersController = async (req, res) => {
    try{
        return res.status(200).send(await userService.findAllUsersService());
    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// criar usuário
const createUserController = async (req, res) => {
    try{
        const body = req.body;

        // validação padrão
        if(!body.nome){
            return res.status(400).send({ message: `O nome não está preenchido, tente novamente mais tarde.`});
        }

        return res.status(201).send(await userService.createUserService(body));
    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// atualizar usuário
const updateUserController = async (req, res) => {
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ message: `O nome não está preenchido, tente novamente mais tarde.`});
        }

        return res.send(await userService.updateUserService(req.params.id, body));
    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// deletar usuário
const removeUserController = async (req, res) => {
    try{
        const deletedUser = await userService.removeUserService(req.params.id);

        // verificar se algo foi deletado
        
        if(deletedUser == null){
        console.log(deletedUser);
            res.status(404).send({ message: "Usuário não encontrado.."})
        }else{
            res.status(200).send({ message: "Usuário deletado."})
        }

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// adicionar endereço
const addUserAddressController = async (req, res) => {
    try{
        req.body.createdAt = new Date();
        const endereco = await userService.addUserAddressService(req.params.id, req.body);

        if(endereco.value == null){
            res.status(400).send({ message: "Houve um erro, tente novamente mais tarde."});
            res.status(201).send({ message: "Endereço adicionado com sucesso."});
        }else{
            res.status(201).send({ message: "Endereço adicionado com sucesso."});
        }

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});  
    }
};

// remover endereço
const removeUserAddressController = async (req, res) => {
    try{
        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        endereco.value.enderecos.map((valor, chave) => {
            if(valor.id == req.body.addressId){
                found = true;
            }
        });

        if(found){
            res.status(200).send({ message: "Endereço removido com sucesso."});
        }else{
            res.status(400).send({ message: "Não foi possível remover o endereço."});
        }
    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// adicionar produto favorito
const addUserFavProductController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// deletar produto favorito
const removeUserFavProductController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController
};