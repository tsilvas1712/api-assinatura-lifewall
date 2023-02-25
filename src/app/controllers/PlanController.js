import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const plan = await Plan.create(req.body);
    res.json(plan);
  }

  async index(req, res) {
    const plans = await Plan.findAll();

    return res.json({ results: plans });
  }
}

export default new PlanController();
