const match = require('../config');


const createUsers = (bodyUser) => {
    return match
        .insert(bodyUser)
        .into('users')
        .returning('*')
};

const getAllUser = () => {
    return match
        .select('*')
        .from('users')
        .where({ active: true })
};

const getOneUSer = (idUser) => {
    return match
        .select('*')
        .from('users')
        .where({ user_id: idUser, active: true })
};

const getProviders = () => {
    return match
        .select('*')
        .from('users')
        .where({ is_provider: true, active: true })
};

const getEmployers = () => {
    return match
        .select('*')
        .from('users')
        .where({ is_employer: true, active: true })
};

const updateUser = (idUser, bodyToUpdate) => {
    return match
        .update(bodyToUpdate)
        .from('users')
        .where({ user_id: idUser, active: true })
        .returning('*')
};

const logicDeleteUser = (idUser) => {
    return match
        .update({ active: false })
        .from('users')
        .where({ user_id: idUser, active: true })
}





module.exports = {
    createUsers,
    getAllUser,
    getOneUSer,
    getProviders,
    getEmployers,
    updateUser,
    logicDeleteUser,
    

}