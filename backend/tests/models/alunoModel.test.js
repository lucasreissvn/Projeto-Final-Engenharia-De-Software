// Mock do pool
jest.mock('../../src/config/db', () => ({
    query: jest.fn()
}));

const pool = require('../../src/config/db');
const alunoModel = require('../../src/models/alunoModel');

describe("Testes do alunoModel", () => {

    beforeEach(() => {
        pool.query.mockClear();
    });

    test("create() deve executar INSERT corretamente", async () => {
        const dados = {
            nome: "Lucas",
            data_nasc: "2000-10-10",
            email: "lucas@example.com"
        };

        await alunoModel.create(dados);

        expect(pool.query).toHaveBeenCalledTimes(1);
        expect(pool.query).toHaveBeenCalledWith(
            "INSERT INTO aluno (nome, data_nasc, email) VALUES ($1, $2, $3)",
            ["Lucas", "2000-10-10", "lucas@example.com"]
        );
    });

    test("update() deve executar UPDATE corretamente", async () => {
        const dados = {
            nome: "Novo Nome",
            data_nasc: "2001-05-05",
            email: "novo@example.com"
        };

        await alunoModel.update(5, dados);

        expect(pool.query).toHaveBeenCalledWith(
            "UPDATE aluno SET nome=$1, data_nasc=$2, email=$3 WHERE id_aluno=$4",
            ["Novo Nome", "2001-05-05", "novo@example.com", 5]
        );
    });

    test("delete() deve executar DELETE corretamente", async () => {
        await alunoModel.delete(10);

        expect(pool.query).toHaveBeenCalledWith(
            "DELETE FROM aluno WHERE id_aluno=$1",
            [10]
        );
    });
});
