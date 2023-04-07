const Usuario = require("../model/user");

// apenas um usuário
const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

// todos usuários
const findAllUsersService = () => {
    return Usuario.find();
};

// criar usuário
const createUserService = (body) => {
    return Usuario.create(body);
};

// atualizar usuário
const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" }); // atualizar e retornar o documento correto
};

// remover usuário
const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
};

// adicionar endereço ao usuário
const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push:{
                enderecos: endereco,
            }
        },
        {
            rawResult: true,
        }
    );
}

// remover endereço
const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull:{
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResult: true,
        }
    )
};

const addUserFavProductService = (id, produto) => {

};

const removeUserFavProductService = (produto) => {

};

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeUserFavProductService
};