import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const { street, number, complement, neighborhood, zip, city, state } =
      req.body;

    const file = await Address.create({
      address: {
        street,
        number,
        complement,
        neighborhood,
        zip,
        city,
        state,
        user_id: req.userId,
      },
    });
    res.json(file);
  }
}

export default new AddressController();
