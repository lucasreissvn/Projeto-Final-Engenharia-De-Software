const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');
const auth = require('../middleware/auth');
const { permit } = require("../middleware/roles");


// Ambos podem VER
router.get("/", auth, permit("admin", "professor"), matriculaController.index);

// Ambos podem CRIAR
router.get("/new", auth, permit("admin", "professor"), matriculaController.newForm);
router.post("/new", auth, permit("admin", "professor"), matriculaController.create);

// Ambos podem EDITAR
router.get("/:id/edit", auth, permit("admin", "professor"), matriculaController.editForm);
router.post("/:id/edit", auth, permit("admin", "professor"), matriculaController.update);

// SOMENTE admin pode remover
router.get("/:id/delete", auth, permit("admin"), matriculaController.delete);

module.exports = router;
