/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE', // update the foreign table reference if something change in the primary table
      onDelete: 'SET NULL', // delete the product if the category is deleted from the categories table
      allowNull: true,
     });
  },

  async down(queryInterface) {
     await queryInterface.removeColumn('products', 'category_id');
  },
};
