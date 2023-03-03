/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('status-deliveries', [
      {
        status: 'Processando',
      },
      {
        status: 'Produzindo',
      },
      {
        status: 'Enviado',
      },
      {
        status: 'Entregue',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('status-deliveries', null, {});
  },
};
