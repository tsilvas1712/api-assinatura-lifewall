import { Model, Sequelize } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        zip: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Address;
