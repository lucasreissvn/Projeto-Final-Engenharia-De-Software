const pool = require('../config/db');

module.exports = class Aluno {
    static async getAll() {
        const { rows } = await pool.query("SELECT * FROM aluno ORDER BY id_aluno");
        return rows;
    }

    static async getById(id) {
        const { rows } = await pool.query("SELECT * FROM aluno WHERE id_aluno=$1", [id]);
        return rows[0];
    }

    static async create(data) {
        const { nome, data_nasc, email } = data;
        await pool.query(
            "INSERT INTO aluno (nome, data_nasc, email) VALUES ($1, $2, $3)",
            [nome, data_nasc, email]
        );
    }

    static async update(id, data) {
        const { nome, data_nasc, email } = data;
        await pool.query(
            "UPDATE aluno SET nome=$1, data_nasc=$2, email=$3 WHERE id_aluno=$4",
            [nome, data_nasc, email, id]
        );
    }

    static async delete(id) {
        await pool.query("DELETE FROM aluno WHERE id_aluno=$1", [id]);
    }
}
