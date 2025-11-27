const pool = require('../config/db');

module.exports = class Matricula {

    static async getAll() {
        const { rows } = await pool.query(`
            SELECT 
                m.id_matricula, 
                a.nome AS nome_aluno, 
                t.nome_turma AS nome_turma,
                m.status,
                m.id_aluno, 
                m.id_turma
            FROM matricula m
            JOIN aluno a ON m.id_aluno = a.id_aluno
            JOIN turma t ON m.id_turma = t.id_turma
            ORDER BY m.id_matricula
        `);
        return rows;
    }

    static async getById(id) {
        const { rows } = await pool.query(
            "SELECT * FROM matricula WHERE id_matricula=$1",
            [id]
        );
        return rows[0];
    }

    static async create(data) {
        const { id_aluno, id_turma, status } = data;
        await pool.query(
            "INSERT INTO matricula (id_aluno, id_turma, status) VALUES ($1, $2, $3)",
            [id_aluno, id_turma, status]
        );
    }

    static async update(id, data) {
        const { id_aluno, id_turma, status } = data;
        await pool.query(
            `UPDATE matricula
             SET id_aluno=$1, id_turma=$2, status=$3
             WHERE id_matricula=$4`,
            [id_aluno, id_turma, status, id]
        );
    }

    static async delete(id) {
        await pool.query(
            "DELETE FROM matricula WHERE id_matricula=$1",
            [id]
        );
    }
};
