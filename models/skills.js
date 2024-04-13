const matchSkills = require('../config');

const createSkill = (bodySkill) => {
    return matchSkills
        .insert(bodySkill)
        .into('skills')
        .returning('*')
};

const getAllSkill = () => {
    return matchSkills
        .select('*')
        .from('skills')
        .where({active:true})
};

const getSkillById = (idSkill) => {
    return matchSkills
        .select('*')
        .from('skills')
        .where({ skill_id: idSkill, active: true })
};

const updateSkill = (idSkill, bodyToUpdate) => {
    return matchSkills
        .update(bodyToUpdate)
        .from('skills')
        .where({ skill_id: idSkill, active: true })
        .returning('*')

};

const logicDeleteSkill = (idSkill) => {
    return matchSkills
        .from('skills')
        .where({ skill_id: idSkill, active: true })
        .update({ active: false });
};




module.exports = {
    createSkill,
    getAllSkill,
    getSkillById,
    updateSkill,
    logicDeleteSkill,

}