import Delivery from '../models/Delivery';
import File from '../models/File';
import ItemsDelivery from '../models/ItemsDelivery';
import StatusDelivery from '../models/StatusDelivery';

class DeliveryController {
  async store(req, res) {
    const {image}= req.body
    const q_photos = image.length;

    const data = {
      q_photos,
      status_id: 1,
      user_id: req.userId,
    }; 

    const delivery = await Delivery.create(data);
    
    console.log(delivery.id)

    const itemsData = [8,9]

    itemsData.map(async image =>{
      await ItemsDelivery.create({delivery_id:delivery.id,file_id:image})
      .then(async ()=>{
        const file = await File.findByPk(image)
        file.update({printed:true})
      })
    })

    
    res.json(delivery);
  }

  async index(req, res) {
    const deliveries = await Delivery.findAll({
      attributes:['id','q_photos','created_at'],
      include:[{
        model:StatusDelivery,
        attributes:['status']
      }],
    },
    {where:{user_id:req.userId}}     
    );

    return res.json(deliveries);
  }
}

export default new DeliveryController();
