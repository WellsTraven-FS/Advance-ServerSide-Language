const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Homepage! GET");
});

// DYNAMIC;
app.get("/products/all", (req, res) => {
    res.send(" GET Products: 2, price, desc");
});

app.get("/products/:productId-:size-:color", (req, res) => {
    res.send(
        `GET Products:  ${req.params.productId},  ${req.params.size}, ${req.params.color}`
    );
});
app.get("/products/:id", (req, res) => {
    res.send(" GET Products:" + req.params.id);
});

app.listen(5000);
