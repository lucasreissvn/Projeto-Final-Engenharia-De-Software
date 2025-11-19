const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

const auth = require('../middleware/auth');
const permit = require('../middleware/roles');

router.get("/", auth, permit('admin','professor'), cursoController.list);

router.get("/new", auth, permit('admin'), cursoController.formNew);
router.post("/new", auth, permit('admin'), cursoController.create);

router.get("/edit/:id", auth, permit('admin'), cursoController.formEdit);
router.post("/edit/:id", auth, permit('admin'), cursoController.update);

router.post("/delete/:id", auth, permit('admin'), cursoController.remove);

module.exports = router;
