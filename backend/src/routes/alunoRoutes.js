const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');
const auth = require('../middleware/auth');
const { permit } = require("../middleware/roles");

router.get("/", auth, permit("admin"), alunoController.index);
router.get("/new", auth, permit("admin"), alunoController.newForm);
router.post("/new", auth, permit("admin"), alunoController.create);

router.get("/:id/edit", auth, permit("admin"), alunoController.editForm);
router.post("/:id/edit", auth, permit("admin"), alunoController.update);

router.get("/:id/delete", auth, permit("admin"), alunoController.delete);

module.exports = router;
