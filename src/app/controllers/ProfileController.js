import User from '../models/User';
import Address from '../models/Address';

class ProfileController {
  async show(req, res) {
    const user = await User.findByPk(req.userId);

    return res.json(user);
  }

  async showAddress(req, res) {
    const userAddress = await Address.findOne({
      where: { user_id: req.userId },
    });

    return res.json({ address: userAddress });
  }
}

export default new ProfileController();
