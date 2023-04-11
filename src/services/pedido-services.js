const Pedido = require("../model/pedido");
const mongoose = require("mongoose");

const findPedidoByIdService = (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        console.log('ID inválido!');
      } else {
        return Pedido.findById(id);
      }
};

const findAllPedidosByIdService = () => {
    return Pedido.find();
};

const createPedidoService = (body) => {
    return Pedido.create(body);
};

const removePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
};

const updateStatusPedidoService = (id) => {
    
};

module.exports = {
    findPedidoByIdService,
    findAllPedidosByIdService,
    createPedidoService,
    removePedidoService,
    updateStatusPedidoService
};