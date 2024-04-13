const match = require('../config')

const createMatch = (bodyMatches) => {
    return match
        .insert(bodyMatches)
        .into('matches')
        .returning('*')
};

const getAllMatches = () => {
    return match
        .select('*')
        .from('matches')
        .where({ active: true })
};

const getOneMatch = (idMatches) => {
    return match
        .select('*')
        .from('matches')
        .where({ match_id: idMatches, active: true })
};

const updateMatch = (idMatch, bodyToUpdate) => {
    return match
        .update(bodyToUpdate)
        .from('matches')
        .where({ match_id: idMatch, active: true })
        .returning('*')
};

const logicDeleteMatch =(idMatch)=>{
    return match
    .update({active: false})
    .from('matches')
    .where({match_id : idMatch, active: true})  
}

module.exports={
    createMatch,
    getAllMatches,
    getOneMatch,
    updateMatch,
    logicDeleteMatch
    
}