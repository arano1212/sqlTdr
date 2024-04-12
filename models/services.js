const matchServices = require('../config')

const createService = (bodyService) => {
    return matchServices
        .insert(bodyService)
        .into('services')
        .returning('*')
};

const getAllService = () => {
    return matchServices
        .select('*')
        .from('services')
        .where({ active: true })
};

const getOneService = (idService) => {
    return matchServices
        .select('*')
        .from('services')
        .where({ id: idService, active: true })
};

const updateService = (idService, bodyToUpdate) => {
    return matchServices
        .update(bodyToUpdate)
        .from('services')
        .where({ id: idService, active: true })
        .returning('*')
};

const logicDeleteService =(idService)=>{
    return matchServices
    .update({active: false})
    .from('services')
    .where({id : idService, active: true})  
}

module.exports = {
    createService,
    getAllService,
    getOneService,
    updateService,
    logicDeleteService
}