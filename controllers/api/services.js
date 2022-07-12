const Service = require('../../models/Service')


// Find all services
const index = async (req, res) => {
    try {
        const services = await Service.find({})
        res.status(200).json(services)
    }catch(e){
        res.status(400).json({msg: e.message})
    }
}
module.exports = {
    index
}