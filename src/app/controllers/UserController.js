import User from '../models/User';
import File from '../models/File';
import Address from '../models/Address';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, name, email, activate } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      activate,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return req.status(400).json({ error: 'User already Exist' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = await user.update(req.body);
    return res.json({ id, name, email });
  }

  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'activate'],
      include: [
        {
          model: Address,
          order: [['Address.created_at', 'DESC']],
        },
        {
          model: File,
          attributes: ['name', 'path', 'url', 'printed'],
        },
      ],
    });

    return res.json(users);
  }
}

export default new UserController();
