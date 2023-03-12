import { Model, Sequelize } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        printed: Sequelize.BOOLEAN,
        user_id: Sequelize.INTEGER,
        deleted: Sequelize.BOOLEAN,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.ItemsDelivery, { foreignKey: 'file_id' });
  }
}

export default File;
