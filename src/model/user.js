// criar usuário através de um model schema mongoose
const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true,required: true},
    senha: { type: String, required: true},
    imagem: { type: String, required: true},
    endereços: [
        {
            rua: { type: String, required: true},
            numero: { type: Number, required: true},
            complemento: { type: String, required: false},
            CEP: { type: String, required: true},
            createAt: {type: Date, required: true},
        }
    ],
    createAt: {type: Date, required: true},
    produtos_favs: [
        {
            // ID referenciado ao produtos
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos"},
            createAt: {type: Date, required: true}
        }
    ],
    // definir padrão(false) ao criar user adm s/n
    admin: { type: Boolean, required: true, default: false},
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;