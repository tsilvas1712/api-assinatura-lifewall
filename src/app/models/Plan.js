import { Model, Sequelize } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        limit_factor: Sequelize.INTEGER,
        limit_photos: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'plan_id' });
  }
}

export default Plan;
