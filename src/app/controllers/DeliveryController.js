import Delivery from '../models/Delivery';

class DeliveryController {
  async store(req, res) {
    const { q_photos } = req.body;

    const data = {
      q_photos,
      status_id: 1,
      user_id: req.userId,
    };

    console.log('DATA', data);

    const delivery = await Delivery.create(data);
    res.json(delivery);
  }

  async index(req, res) {
    const deliveries = await Delivery.findAll({
      where: { user_id: req.userId },
    });

    return res.json(deliveries);
  }
}

export default new DeliveryController();
