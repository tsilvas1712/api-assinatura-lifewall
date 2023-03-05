import { Model, Sequelize } from 'sequelize';

class StatusDelivery extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.STRING,

      },
      {
        tableName: 'status-deliveries',
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Delivery, { foreignKey: 'status_id' });
  }
}

export default StatusDelivery;
