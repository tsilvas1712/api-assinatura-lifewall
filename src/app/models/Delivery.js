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
}

export default Delivery;
