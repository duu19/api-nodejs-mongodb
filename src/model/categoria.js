const mongoose = require("mongoose");

// categorias 
const CategoriaSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
});

const Categoria = mongoose.model("categorias", CategoriaSchema);

module.exports =  Categoria;