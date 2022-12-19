const express = require("express");
const router = express.Router();
const imageController = require("../controllers/Images");

// Loading in our new middleware
const { uploadImage } = require("../middlewares");

router.get("/", imageController.index);
router.get("/new", imageController.form);
router.get("/:id", imageController.show);
router.get("/:id/edit", imageController.form);

router.post("/", imageController.create, uploadImage);
router.post("/:id", imageController.update, uploadImage);

router.delete("/:id", imageController.erase);
router.post("/:id/delete", imageController.erase);

module.exports = router;
