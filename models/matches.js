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
};

const getMatches =()=>{
    return match
    .select(
        'users_provider.username AS provider_name',
        'users_employer.username AS employer_name',
        'skills.name AS skill_name',
        'matches.status'
    )
    .from('matches')
    .join('users AS users_provider', 'users_provider.user_id', '=', 'matches.provider_id')
    .join('users AS users_employer', 'users_employer.user_id', '=', 'matches.employer_id')
    .join('skills', 'skills.skill_id', '=', 'matches.skill_id')

};

const getMatchesStatus = ()=>{
    return match
    .select(
        'users_provider.username AS provider_name',
        'users_employer.username AS employer_name',
        'skills.name AS skill_name',
        'matches.status'
    )
    .from('matches')
    .join('users AS users_provider', 'users_provider.user_id', '=', 'matches.provider_id')
    .join('users AS users_employer', 'users_employer.user_id', '=', 'matches.employer_id')
    .join('skills', 'skills.skill_id', '=', 'matches.skill_id')
    .where('matches.status', '=', 'accepted');
};

const getCompleteInfo = () => {
    return match
        .select(
            'provider.username AS provider_name',
            'employer.username AS employer_name',
            'skills.name AS skill_name',
            'services.duration_hours',
            'services.status AS service_status',
            'payments.amount',
            'payments.payment_date',
            'matches.status AS match_status'
        )
        .from('services')
        .join('users AS provider', 'services.provider_id', '=', 'provider.user_id')
        .join('users AS employer', 'services.employer_id', '=', 'employer.user_id')
        .join('skills', 'services.skill_id', '=', 'skills.skill_id')
        .join('payments', 'services.id', '=', 'payments.service_id')
        .join('matches', function() {
            this.on('matches.provider_id', '=', 'provider.user_id')
                .andOn('matches.employer_id', '=', 'employer.user_id')
                .andOn('matches.skill_id', '=', 'skills.skill_id')
        });
}



module.exports={
    createMatch,
    getAllMatches,
    getOneMatch,
    updateMatch,
    logicDeleteMatch,
    getMatches,
    getMatchesStatus,
    getCompleteInfo
    
}