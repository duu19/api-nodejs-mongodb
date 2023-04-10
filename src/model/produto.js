const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    pizzaSabor: { type: String, unique: true, required: true },
    descricao: { type: String, required: true },
    tamanho: { type: String, required: true },
    precoUnidade: { type: Number, required: true },
    imagem: { type: String, required: true },
    refrigerante: { type: String, unique: true, required: true },
    bordaRecheada: { type: String, required: true },
     categorias: [
         {
             _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categorias" },
             createAt: {type: Date, default: Date.now() },
         },
     ],
});

const Produto = mongoose.model("pizza", ProdutoSchema);

module.exports = Produto;