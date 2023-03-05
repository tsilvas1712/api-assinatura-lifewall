import Sequelize from 'sequelize';

import Address from '../app/models/Address';
import Delivery from '../app/models/Delivery';
import File from '../app/models/File';
import ItemsDelivery from '../app/models/ItemsDelivery';
import Plan from '../app/models/Plan';
import StatusDelivery from '../app/models/StatusDelivery';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User, File, Address, Plan, Delivery,ItemsDelivery,StatusDelivery];

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
