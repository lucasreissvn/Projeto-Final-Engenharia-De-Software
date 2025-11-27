const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');

module.exports = {
    loginForm(req, res) {
        res.render("auth/login");
    },

    async login(req, res) {
        const { email, senha } = req.body;

        const user = await Usuario.findByEmail(email);

        if (!user) {
            return res.send("Usuário não encontrado");
        }

        const ok = await bcrypt.compare(senha, user.senha);

        if (!ok) {
            return res.send("Senha inválida");
        }

        req.session.user = {
            id: user.id,
            nome: user.nome,
            role: user.role
        };

        res.redirect("/dashboard");

    },

    logout(req, res) {
        req.session.destroy(() => {
            res.redirect("/login");
        });
    }
};
