const { Variant, Product } = require("../models");

const index = async (req, res) => {
    const variants = await Variant.findAll();
    // res.render("views/variants/index", { variants });
    res.json(variants);
};
const form = async (req, res) => {
    // res.send("Products.form");
    const products = await Product.findAll();
    if (req.params.id) {
        const variant = Variant.find(req.params.id);
        res.render("views/variants/edit", { variant, products });
    } else {
        res.render("views/variants/create", { products });
    }
};
const show = async (req, res) => {
    const variant = await Variant.findByPk(req.params.id);
    const product = await variant.getProduct();
    // res.json(product);
    res.render("views/variants/show", { variant, product });
};
const create = async (req, res) => {
    const variant = await Variant.create(req.body);
    res.redirect("/variants/" + variant.id);
    // res.json(product);
};
const update = async (req, res) => {
    const variant = await Variant.update(req.body, {
        where: { id: Number(req.params.id) },
    });
    res.redirect("/variants/" + req.params.id);
    // res.json(variant);
};
const erase = (req, res) => {
    const variants = Variant.destroy({
        where: { id: req.params.id },
    });
    res.redirect("/variants");
    res.json(variants);
};

module.exports = { index, form, show, create, update, erase };
