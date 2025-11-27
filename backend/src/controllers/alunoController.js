const Aluno = require('../models/alunoModel');

module.exports = {
    async index(req, res) {
        const alunos = await Aluno.getAll();
        res.render("alunos/index", { alunos });
    },

    async newForm(req, res) {
        res.render("alunos/new");
    },

    async create(req, res) {
        await Aluno.create(req.body);
        res.redirect("/alunos");
    },

    async editForm(req, res) {
        const aluno = await Aluno.getById(req.params.id);
        res.render("alunos/edit", { aluno });
    },

    async update(req, res) {
        await Aluno.update(req.params.id, req.body);
        res.redirect("/alunos");
    },

    async delete(req, res) {
        await Aluno.delete(req.params.id);
        res.redirect("/alunos");
    }
};
