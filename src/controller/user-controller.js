// funções do controller

// buscar usuário específico
const findUserByIdController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// buscar todos usuários no banco
const findAllUsersController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// criar usuário
const createUserController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// atualizar usuário
const updateUserController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// deletar usuário
const removeUserController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// adicionar endereço
const addUserAddressController = async (req, res) => {
    try{

    }catch (err){
        // não retornar erro direto ao usuário
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Houve um erro no servidor, tente novamente mais tarde.`});
    }
};

// remover endereço
const removeUserAddressController = async (req, res) => {
    try{

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