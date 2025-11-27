const Turma = require('../models/turmaModel');
const Curso = require('../models/cursoModel');

module.exports = {
    async index(req, res) {
        const turmas = await Turma.getAll();
        res.render("turmas/index", { turmas });
    },

    async newForm(req, res) {
        const cursos = await Curso.getAll();
        res.render("turmas/new", { cursos });
    },

    async create(req, res) {
        await Turma.create(req.body);
        res.redirect("/turmas");
    },

    async editForm(req, res) {
        const turma = await Turma.getById(req.params.id);
        const cursos = await Curso.getAll();
        res.render("turmas/edit", { turma, cursos });
    },

    async update(req, res) {
        await Turma.update(req.params.id, req.body);
        res.redirect("/turmas");
    },

    async delete(req, res) {
        await Turma.delete(req.params.id);
        res.redirect("/turmas");
    }
};
