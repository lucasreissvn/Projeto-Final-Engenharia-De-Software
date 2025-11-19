const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config({ path: path.join(__dirname, '../.env') });


const authRoutes = require('./routes/authRoutes');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();

// Config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Sessão
app.use(session({
    secret: process.env.SESSION_SECRET,  // Agora está funcionando
    resave: false,
    saveUninitialized: false
}));

// Rotas
app.use('/', authRoutes);
app.use('/cursos', cursoRoutes);

// Página inicial
app.get("/", (req, res) => {
    res.redirect("/cursos");
});

module.exports = app;
