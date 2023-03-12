import Plan from '../models/Plan';
import User from '../models/User';

class PlanController {
  async store(req, res) {
    const plan = await Plan.create(req.body);
    res.json(plan);
  }

  async index(req, res) {
    const user = await User.findByPk(req.userId);
    const plan = await Plan.findByPk(user.plan_id);

    return res.json(plan);
  }
}

export default new PlanController();
