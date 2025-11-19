const Curso = require('../models/cursoModel');

module.exports = {
    async list(req, res) {
        const cursos = await Curso.getAll();
        res.render("cursos/index", { cursos, user: req.session.user });
    },

    formNew(req, res) {
        res.render("cursos/new");
    },

    async create(req, res) {
        const { nome_curso, carga_horaria } = req.body;
        await Curso.create(nome_curso, carga_horaria);
        res.redirect("/cursos");
    },

    async formEdit(req, res) {
        const curso = await Curso.getById(req.params.id);
        res.render("cursos/edit", { curso });
    },

    async update(req, res) {
        const { nome_curso, carga_horaria } = req.body;
        await Curso.update(req.params.id, nome_curso, carga_horaria);
        res.redirect("/cursos");
    },

    async remove(req, res) {
        await Curso.delete(req.params.id);
        res.redirect("/cursos");
    }
};
