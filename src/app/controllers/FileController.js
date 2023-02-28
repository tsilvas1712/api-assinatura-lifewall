import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path, user_id: req.userId });
    res.json(file);
  }

  async index(req, res) {
    const files = await File.findAll({ where: { user_id: req.userId } });

    return res.json( files );
  }
}

export default new FileController();
