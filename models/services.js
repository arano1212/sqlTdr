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

const logicDeleteService = (idService) => {
    return matchServices
        .update({ active: false })
        .from('services')
        .where({ id: idService, active: true })
};

const getSkillsUser = () => {
    return matchServices
        .select('users.user_id AS user_id',
            'users.username',
            'skills.name AS skill_name')
        .from('users')
        .join('services', 'users.user_id', '=', 'services.provider_id')
        .join('skills', 'services.skill_id', '=', 'skills.skill_id');
};

const getSkillByUSerId = (idUser) =>{
    return matchServices
    .select(
        'users.user_id AS user_id',
        'users.username',
        'skills.name AS skill_name'
    )
    .from('users')
    .join('services', 'users.user_id', '=', 'services.provider_id')
    .join('skills', 'services.skill_id', '=', 'skills.skill_id')
    .where('users.user_id', '=', idUser)

};

const getPendingServices = () =>{
    return matchServices
    .select(
        'users_provider.username AS provider_name',
        'users_employer.username AS employer_name',
        'services.duration_hours',
        'services.status'
    )
    .from('services')
    .join('users AS users_provider', 'users_provider.user_id', '=', 'services.provider_id')
    .join('users AS users_employer', 'users_employer.user_id', '=', 'services.employer_id')
    .where('services.status', '=', 'pending');

};


module.exports = {
    createService,
    getAllService,
    getOneService,
    updateService,
    logicDeleteService,
    getSkillsUser,
    getSkillByUSerId,
    getPendingServices
}