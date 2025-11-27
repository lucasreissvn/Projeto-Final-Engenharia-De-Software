const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');
const auth = require('../middleware/auth');
const { permit } = require("../middleware/roles");


router.get("/", auth, permit("admin"), turmaController.index);
router.get("/new", auth, permit("admin"), turmaController.newForm);
router.post("/new", auth, permit("admin"), turmaController.create);

router.get("/:id/edit", auth, permit("admin"), turmaController.editForm);
router.post("/:id/edit", auth, permit("admin"), turmaController.update);

router.get("/:id/delete", auth, permit("admin"), turmaController.delete);

module.exports = router;
