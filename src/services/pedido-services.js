const Pedido = require("../model/pedido");
const mongoose = require("mongoose");

const findPedidoByIdService = (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        console.log('ID inválido!');
      } else {
        return Pedido.findById(id);
      }
};

const findAllPedidosByIdService = (limit, offset) => {
    return Pedido.find().limit(limit).skip(offset);;
};

const createPedidoService = (body) => {
    return Pedido.create(body);
};

const removePedidoService = (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log("ID DO CARALHO???");
      }else {
        return Pedido.findByIdAndRemove(id);
      }
};

const updateStatusPedidoService = (id) => {
  return Pedido.findOneAndUpdate({ _id: id}, { $set: { concluido: true } });
};


module.exports = {
    findPedidoByIdService,
    findAllPedidosByIdService,
    createPedidoService,
    removePedidoService,
    updateStatusPedidoService
};