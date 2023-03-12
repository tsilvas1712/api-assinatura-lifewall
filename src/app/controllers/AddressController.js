import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const { street, number, complement, neighborhood, zip, city, state } =
      req.body;

    try {
      const address = await Address.create({
        street,
        number,
        complement,
        neighborhood,
        zip,
        city,
        state,
        user_id: req.userId,
      });

      return res.json(address);
    } catch (error) {
      console.log('ERROR', error);
      return res.status(400).json({ error: 'Address exists.' });
    }
  }
}

export default new AddressController();
