import { Model, Sequelize } from 'sequelize';

class ItemsDelivery extends Model {
  static init(sequelize) {
    super.init(
      {
        delivery_id: Sequelize.INTEGER,
        file_id: Sequelize.INTEGER,
      },
      {
        tableName: 'items-delivery',
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'file_id' });
  }
}

export default ItemsDelivery;
