const express = require("express");
const router = express.Router();
const variantController = require("../controllers/Products");

router.get("/", variantController.index);
router.get("/new", variantController.form);
router.get("/:id", variantController.show);
router.get("/:id/edit", variantController.form);
router.post("/", variantController.create);
router.post("/:id", variantController.update);
router.post("/:id", variantController.update);
router.delete("/:id", variantController.erase);
router.post("/:id/delete", variantController.erase);

module.exports = router;
