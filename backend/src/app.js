const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { permit } = require("./middleware/roles");

const alunoRoutes = require('./routes/alunoRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const matriculaRoutes = require('./routes/matriculaRoutes');
const authRoutes = require('./routes/authRoutes');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();

// Config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});


// 3️⃣ Suas rotas
app.use('/', authRoutes);
app.use('/cursos', cursoRoutes);
app.use("/alunos", alunoRoutes);
app.use("/turmas", turmaRoutes);
app.use('/matriculas', matriculaRoutes);
const auth = require('./middleware/auth'); // se ainda não tiver, importa aqui

// Tela inicial depois do login: menu de gerenciamento
app.get("/dashboard", auth, (req, res) => {
    res.render("dashboard");
});


app.get("/", (req, res) => {
    if (req.session.user) {
        return res.redirect("/dashboard");
    }
    res.redirect("/login");
});

module.exports = app;
