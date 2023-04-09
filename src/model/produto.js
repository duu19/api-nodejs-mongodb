const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    pizzaSabor: { type: String, unique: true, required: true },
    descricao: { type: String, required: true },
    tamanho: { type: String, required: true },
    precoUnidade: { type: Number, required: true },
    imagem: { type: String, required: true },
    refrigerante: { type: String, unique: true, required: true },
    bordaRecheada: { type: String, required: true },
    // categoria: [
    //     {
    //         _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categorias" },
    //         createdAt: { type: Date, required: true }
    //     },
    // ],
});

const Produto = mongoose.model("pizza", ProdutoSchema);

module.exports = Produto;