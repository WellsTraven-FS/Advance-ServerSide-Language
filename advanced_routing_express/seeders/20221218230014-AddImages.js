"use strict";

// /** @type {import('sequelize-cli').Migration} */

const [createdAt, updatedAt] = [new Date(), new Date()];
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert("Images", [
            {
                id: 1,
                variantId: 1,
                // extension: "png",
                createdAt,
                updatedAt,
            },
            {
                id: 2,
                variantId: 2,
                // extension: "png",
                createdAt,
                updatedAt,
            },
            {
                id: 3,
                variantId: 3,
                // extension: "png",
                createdAt,
                updatedAt,
            },
            {
                id: 4,
                variantId: 4,
                // extension: "png",
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
        return await queryInterface.bulkDelete("Images", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
