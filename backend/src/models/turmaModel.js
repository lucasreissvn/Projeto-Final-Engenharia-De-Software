const pool = require('../config/db');

module.exports = class Turma {
    static async getAll() {
        const { rows } = await pool.query(
            `SELECT t.*, c.nome_curso AS nome_curso
             FROM turma t
             JOIN cursos c ON t.id_curso = c.id_curso
             ORDER BY id_turma`
        );
        return rows;
    }

    static async getById(id) {
        const { rows } = await pool.query("SELECT * FROM turma WHERE id_turma=$1", [id]);
        return rows[0];
    }

    static async create(data) {
        const { id_curso, nome_turma } = data;
        await pool.query(
            "INSERT INTO turma (id_curso, nome_turma) VALUES ($1, $2)",
            [id_curso, nome_turma]
        );
    }

    static async update(id, data) {
        const { id_curso, nome_turma } = data;
        await pool.query(
            "UPDATE turma SET id_curso=$1, nome_turma=$2 WHERE id_turma=$3",
            [id_curso, nome_turma, id]
        );
    }

    static async delete(id) {
        await pool.query("DELETE FROM turma WHERE id_turma=$1", [id]);
    }
}
