const express = require("express");
const router = express.Router();
const imageController = require("../controllers/Products");

router.get("/", imageController.index);
router.get("/new", imageController.form);
router.get("/:id", imageController.show);
router.get("/:id/edit", imageController.form);
router.post("/", imageController.create);
router.post("/:id", imageController.update);
router.post("/:id", imageController.update);
router.delete("/:id", imageController.erase);
router.post("/:id/delete", imageController.erase);

module.exports = router;
