'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
    {
      nome: 'John Doe',
      ativo: true,
      email: 'john@john.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Carlos Candido',
      ativo: true,
      email: 'carlos@carlos.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Isabela Furriel',
      ativo: true,
      email: 'isabela@isabela.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Marcos Cintra',
      ativo: true,
      email: 'marcos@marcos.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Paula Morais',
      ativo: true,
      email: 'paula@paula.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Sergio Lopes',
      ativo: true,
      email: 'sergio@sergio.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Sanfra Gomes',
      ativo: false,
      email: 'sandra@sandra.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Gabriele Ciriano',
      ativo: true,
      email: 'gabriele@gabriele.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
