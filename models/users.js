const match = require('../config');


const createUsers = (bodyUser) => {
    return match
        .insert(bodyUser)
        .into('users')
        .returning('*')
}

const getAllUser = () => {
    return match
        .select('*')
        .from('users')
        .where({ active: true })
}

module.exports = {
    createUsers,
    getAllUser

}