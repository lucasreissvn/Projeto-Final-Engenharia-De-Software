const pool = require('../config/db');

module.exports = {
    async getAll() {
        const result = await pool.query("SELECT * FROM cursos ORDER BY id_curso");
        return result.rows;
    },

    async getById(id) {
        const result = await pool.query("SELECT * FROM cursos WHERE id_curso = $1", [id]);
        return result.rows[0];
    },

    async create(nome, carga) {
        await pool.query(
            "INSERT INTO cursos (nome_curso, carga_horaria) VALUES ($1, $2)",
            [nome, carga]
        );
    },

    async update(id, nome, carga) {
        await pool.query(
            "UPDATE cursos SET nome_curso = $1, carga_horaria = $2 WHERE id_curso = $3",
            [nome, carga, id]
        );
    },

    async delete(id) {
        await pool.query("DELETE FROM cursos WHERE id_curso = $1", [id]);
    }
};
