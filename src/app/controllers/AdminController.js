import Delivery from '../models/Delivery';
import StatusDelivery from '../models/StatusDelivery';
import User from '../models/User';

class AdminController {
  async index(req, res) {
    const users = await User.findAll();
    const deliveries = await Delivery.findAll();
    const files = await Delivery.findAll();
    const shipped = await Delivery.findAll({ where: { status_id: 4 } });

    res.json({
      users: users,
      deliveries: deliveries,
      files: files,
      shipped: shipped,
    });
  }

  async listUsers(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async listDeliveries(req, res) {
    const deliveries = await Delivery.findAll({
      attributes: ['id', 'q_photos', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
        {
          model: StatusDelivery,
          attributes: ['status'],
        },
      ],
    });

    return res.json(deliveries);
  }
}

export default new AdminController();
