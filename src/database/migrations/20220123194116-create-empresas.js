'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('empresas', { 
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      site:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      created_at:{// registrar a data
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
      });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('empresas');
  }
};
