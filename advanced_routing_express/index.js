const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require("./routes/Products");

app.set("views", __dirname + "/templates");
app.set("view engine", "twig");

app.get("/", (req, res) => {
    res.render("home", {
        name: "New",
        users: [
            { name: "Larry Record", email: "lr@gmail.com" },
            { name: "Jessica Wells", email: "JS@gmail.com" },
            { name: "Traven Wells", email: "TW@outlook.com" },
        ],
    });
});
app.use("/products", productRouter);

app.listen(5000);
