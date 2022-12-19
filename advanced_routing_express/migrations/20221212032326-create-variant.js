"use strict";

// const { SequelizeMethod } = require("sequelize/types/utils");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Variants", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
            },
            slug: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT,
            },
            price: {
                type: Sequelize.FLOAT,
            },
            inventory: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            productId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Variants");
    },
};
