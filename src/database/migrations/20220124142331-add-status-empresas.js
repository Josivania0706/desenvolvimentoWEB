'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('empresas', 'status', {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    })
  },

  async down (queryInterface, Sequelize) {
    
    //await queryInterface.removeColumn('empresas', 'status');
    
    //ESPECIFICO APENAS PRA TIPOS ENUM
    await queryInterface.Sequelize.transaction(async transaction => {
      await queryInterface.removeColumn('empresas', 'status', {transaction})
      await queryInterface.Sequelize.query("DROP TYPE enum_empresas_status", {transaction})
    })
  }
};
