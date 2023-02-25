import User from '../models/User';
import Address from '../models/Address';
import Plan from '../models/Plan';

class ProfileController {
  async show(req, res) {
    const user = await User.findByPk(req.userId);

    const plan = await Plan.findByPk(user.plan_id);

    return res.json({ user, plan });
  }

  async showAddress(req, res) {
    const userAddress = await Address.findOne({
      where: { user_id: req.userId },
    });

    return res.json({ address: userAddress });
  }
}

export default new ProfileController();
