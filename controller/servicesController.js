const matchServicesModels =require('../models/services')

const createServiceController =  async (req, res) =>{
    try {
        const service = req.body;
        const newService = await matchServicesModels.createService(service)
        res.status(201).json(newService)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'tuvimos un error al realizar el registro' })
    }
};


const getAllServiceController = async (req, res) =>{
    try {
        const allService = await matchServicesModels.getAllService()
        res.status(200).json(allService)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getOneServiceController = async(req, res) =>{
    try {
        const idService = req.params.id
        const service = await matchServicesModels.getOneService(idService)
        if (service.length === 0) {
            res.status(404).json({ message: 'servicio no encontrado' })
        } else {
            res.status(200).json(service[0])
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error en el servidor' })
    }
};

const updateserviceController = async(req, res)=>{
    try {
        const idService = req.params.id
        const bodyToUpdate = req.body
        const updateService = await matchServicesModels.updateService(idService, bodyToUpdate)
        res.status(200).json(updateService)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const logicDeleteServiceController = async (req, res) => {
    try {
        const idService = req.params.id;
        await matchServicesModels.logicDeleteService(idService); 
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error en la solicitud' });
    }
};

const getUserSkillsController = async (req, res) =>{
    try {
        const userSkills = await matchServicesModels.getSkillsUser()
        res.status(200).json(userSkills)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getOneUserSkillsController = async (req, res) =>{
    try {
        const idUser= req.params.id
        const userSkills = await matchServicesModels.getSkillByUSerId(idUser)
        res.status(200).json(userSkills)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getPendingController = async (req, res) =>{
    try {
        const userServices= await matchServicesModels.getPendingServices()
        res.status(200).json(userServices)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

module.exports={
    createServiceController,
    getAllServiceController,
    getOneServiceController,
    updateserviceController,
    logicDeleteServiceController,
    getUserSkillsController,
    getOneUserSkillsController,
    getPendingController

}