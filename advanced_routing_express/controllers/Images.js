const { Image, Variant } = require("../models");

const index = async (req, res) => {
    const images = await Image.findAll();
    // res.render("views/images/index", { images });
    res.json(images);
};
const form = async (req, res) => {
    // res.send("images.form");
    const variants = await Variant.findAll();
    if (req.params.id) {
        const image = Image.find(req.params.id);
        res.render("views/images/edit", { image, variants });
    } else {
        res.render("views/images/create", { variants });
    }
};
const show = async (req, res) => {
    const image = await Image.findByPk(req.params.id);
    const variant = await image.getVariant();
    // res.json(image);
    res.render("views/images/show", { image });
};
const create = async (req, res) => {
    const image = await Image.create(req.body);
    res.redirect("/images/" + image.id);
    // res.json(image);
};
const update = (req, res) => {
    const image = Image.update(req.body, {
        where: { id: req.params.id },
    });
    res.redirect("/images/" + req.params.id);
    // res.json(image);
};
const erase = (req, res) => {
    const images = Image.destroy({
        where: { id: req.params.id },
    });
    res.redirect("/images");
    res.json(images);
};

module.exports = { index, form, show, create, update, erase };
