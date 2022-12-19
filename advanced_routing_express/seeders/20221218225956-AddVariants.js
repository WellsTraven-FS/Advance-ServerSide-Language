"use strict";

/** @type {import('sequelize-cli').Migration} */

const description = `Choose a color that will make your feel unique`;

const [createdAt, updatedAt] = [new Date(), new Date()];
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert("Variants", [
            {
                id: 1,
                title: "Red",
                slug: "Red",
                description,
                price: 299.99,
                productId: 1,
                inventory: 10,
                createdAt,
                updatedAt,
            },
            {
                id: 2,
                title: "Army Green",
                slug: "army-green",
                description,
                price: 450.89,
                productId: 2,
                inventory: 5,
                createdAt,
                updatedAt,
            },
            {
                id: 3,
                title: "Black and White",
                slug: "black-and-white",
                description,
                price: 325.48,
                productId: 3,
                inventory: 2,
                createdAt,
                updatedAt,
            },
            {
                id: 4,
                title: "purple",
                slug: "purple",
                description,
                price: 500.99,
                productId: 4,
                inventory: 5,
                createdAt,
                updatedAt,
            },
        ]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("Variants", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
