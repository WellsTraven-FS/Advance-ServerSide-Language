"use strict";

// /** @type {import('sequelize-cli').Migration} */

const description = `This is the perfect bike for you! Don't think of it as a purchase, but more of an investment to your mental and health! Explore the outdoors or tour the city streets. Which ever you prefer, this bike will accomodate your needs!`;

const [createdAt, updatedAt] = [new Date(), new Date()];
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert("Products", [
            {
                id: 1,
                title: "Mongoose",
                slug: "mongoose-bike",
                price: 299.99,
                is_published: true,
                description,
                createdAt,
                updatedAt,
            },
            {
                id: 2,
                title: "Trek",
                slug: "trek-bike",
                price: 450.89,
                is_published: true,
                description,
                createdAt,
                updatedAt,
            },
            {
                id: 3,
                title: "Hefty",
                slug: "hefty-bike",
                price: 325.48,
                is_published: true,
                description,
                createdAt,
                updatedAt,
            },
            {
                id: 4,
                title: "BMX",
                slug: "bmx",
                price: 500.99,
                is_published: true,
                description,
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
        return await queryInterface.bulkDelete("Products", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
