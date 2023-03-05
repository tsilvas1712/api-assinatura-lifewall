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

  
}

export default ItemsDelivery;
