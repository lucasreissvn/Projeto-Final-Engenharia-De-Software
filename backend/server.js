const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app'); // AGORA o app só é importado depois do dotenv

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
