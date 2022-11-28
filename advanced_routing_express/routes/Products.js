const express = require("express");
const router = express.Router();
const productController = require("../controllers/Products");

router.get("/", productController.index);
// router.get("/new", productController.form);
router.get("/:id", productController.show);
// router.get("/:id/edit", productController.form);
router.post("/", productController.create);
router.post("/:id", productController.update);
router.post("/:id", productController.update);
router.delete("/:id", productController.erase);
router.post("/:id/delete", productController.erase);

module.exports = router;
