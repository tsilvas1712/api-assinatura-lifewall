import Delivery from '../models/Delivery';
import File from '../models/File';
import ItemsDelivery from '../models/ItemsDelivery';
import Plan from '../models/Plan';
import StatusDelivery from '../models/StatusDelivery';
import User from '../models/User';

class AdminController {
  async index(req, res) {
    const users = await User.findAll();
    const deliveries = await Delivery.findAll();
    const files = await File.findAll();
    const shipped = await Delivery.findAll({ where: { status_id: 4 } });
    const lastUsers = await User.findAll({
      limit: 5,
    });

    res.json({
      users,
      deliveries,
      files,
      shipped,
      lastUsers,
    });
  }

  async listUsers(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'activate', 'created_at'],
      include: {
        model: Plan,
        attributes: ['name'],
      },
    });

    return res.json(users);
  }

  async userStatusUpdate(req, res) {
    const user = await User.findByPk(req.params.id);

    user.update({
      activate: !user.activate,
    });

    return res.json(user);
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

  async getDelivery(req, res) {
    console.log(req.params.id);

    const delivery = await Delivery.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
        {
          model: ItemsDelivery,
          include: {
            model: File,
          },
        },
      ],
    });

    return res.json(delivery);
  }
}

export default new AdminController();
