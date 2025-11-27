const Matricula = require('../models/matriculaModel');
const Aluno = require('../models/alunoModel');
const Turma = require('../models/turmaModel');

module.exports = {
    async index(req, res) {
        const matriculas = await Matricula.getAll();
        res.render("matriculas/index", { matriculas });
    },

    async newForm(req, res) {
        const alunos = await Aluno.getAll();
        const turmas = await Turma.getAll();
        res.render("matriculas/new", { alunos, turmas });
    },

    async create(req, res) {
        await Matricula.create(req.body);
        res.redirect("/matriculas");
    },

    async editForm(req, res) {
        const matricula = await Matricula.getById(req.params.id);
        const alunos = await Aluno.getAll();
        const turmas = await Turma.getAll();
        res.render("matriculas/edit", { matricula, alunos, turmas });
    },

    async update(req, res) {
        await Matricula.update(req.params.id, req.body);
        res.redirect("/matriculas");
    },

    async delete(req, res) {
        await Matricula.delete(req.params.id);
        res.redirect("/matriculas");
    }
};
