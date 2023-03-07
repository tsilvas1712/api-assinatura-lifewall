import { Model, Sequelize } from 'sequelize';

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        status_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        q_photos: Sequelize.INTEGER,
      },
      {
        tableName: 'deliveries',
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.ItemsDelivery, { foreignKey: 'delivery_id' });
    this.belongsTo(models.StatusDelivery, { foreignKey: 'status_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Delivery;
