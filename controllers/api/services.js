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

// Create a service
const create = async (req, res) => {
    try {
        const createdService = await Service.create(req.body)
        res.status(200).json(createdService)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//Update a service
const update = async(req, res) => {
        try {
            const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.status(200).json(updated)
        } catch(e) {
            res.status(400).json({msg: e.message})
        }
    }
    
// Delete a movie
const remove = async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedService)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index,
    create,
    update,
    remove
}
