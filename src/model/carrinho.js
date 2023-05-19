const mongoose = require("mongoose");

// model carrinho compras
const CarrinhoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "produtos" },
            quantidade: { type: Number, required: true }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    precoTotal: { type: String, required: true },
    entrega: { type: String, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true,ref: "usuarios" }
});

const Carrinho = mongoose.model("carrinhos", CarrinhoSchema);

module.exports = Carrinho;