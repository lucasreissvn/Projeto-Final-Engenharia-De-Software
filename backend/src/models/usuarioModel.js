const pool = require('../config/db');

module.exports = {
    async findByEmail(email) {
        const result = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );
        return result.rows[0];
    }
};
