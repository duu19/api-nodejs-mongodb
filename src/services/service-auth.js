// jsonwebtoken
const Usuario = require("../model/user");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email}).select("senha");

const gerenateToken = (userId) => jwt.sign({id: userId}, "asdjhsdhkalskçlasdnmxzkadsl", {expiresIn: 86400});

module.exports = {
    loginService,
    gerenateToken
};