import File from '../models/File';

class FileController {
  async store(req, res) {
    console.log('IBAGENS', req.files);

    const { files } = req;

    files.map(async (file) => {
      const { originalname: name, filename: path } = file;

      await File.create({ name, path, user_id: req.userId });
    });
    //
    res.json({ message: `${files.length} arquivo(s)  salvos com sucesso !!!` });
  }

  async index(req, res) {
    const files = await File.findAll({
      where: { user_id: req.userId, deleted: false },
    });

    return res.json(files);
  }

  async print(req, res) {
    const files = await File.findAll({
      where: { user_id: req.userId, deleted: false, printed: false },
    });

    return res.json(files);
  }

  async delete(req, res) {
    const imageId = req.params.id;

    const file = await File.findByPk(imageId);

    file.update({
      deleted: true,
    });

    return res.json({ message: `Imagem ${file.name} Deletada com Sucesso` });
  }
}

export default new FileController();
