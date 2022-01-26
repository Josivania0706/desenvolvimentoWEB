'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('contatos', { 
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
        email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        status:{
          type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
          allowNull: false,
          defaultValue: "ACTIVE",
        },
        created_at:{// registrar a data
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        empresa_id:{
          type: Sequelize.INTEGER,
          references:{
            model:"empresas",key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          allowNull: false,
  
        }
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
