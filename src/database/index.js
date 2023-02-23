import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Address from '../app/models/Address';

import databaseConfig from '../config/database';

const models = [User, File, Address];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
