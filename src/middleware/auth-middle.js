// token
const jwt = require("jsonwebtoken");
const { findUserByIdService } = require("../services/user-services");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ message: "Informe o token para prosseguir."});
    }

    const parts = authHeader.split(" "); // (1-bearer, 2-<token>)

    if(parts.lenght !== 2){
        return res.status(401).send({ message: "Token inválido."});
    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message: "Token mal informado."});
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err){
            return res.status(500).send({ message: "Token inválido."});
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({ message: "Token invalido!"});
        }

        req.userId = decoded.id;
        
        return next();
    });
}