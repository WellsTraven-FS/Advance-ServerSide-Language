let products = [
    { id: "1", bike: "Mongoose", color: "Red" },
    { id: "2", bike: "Hefty", color: "Blue" },
    { id: "3", bike: "BMX", color: "Purple" },
];

const all = () => {
    return products;
};

const find = (id) => {
    return products.find((p) => p.id === id);
};

const create = (product) => {
    products.push(product);
    return products;
};

const update = (id, product) => {
    products = products.map((p) => {
        return p.id === id ? product : p;
    });
    return products;
};

const erase = (id) => {
    products = products.filter((p) => p.id !== id);
    return products;
};

module.exports = { all, find, update, erase, create };
