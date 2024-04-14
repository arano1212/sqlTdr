const payment = require('../config')

const createPay = (bodyPayments) => {
    return payment
        .insert(bodyPayments)
        .into('payments')
        .returning('*')
};


const getAllPays = () => {
    return payment
        .select('*')
        .from('payments')
        .where({ active: true })
};

const getOnePay = (idPayments) => {
    return payment
        .select('*')
        .from('payments')
        .where({ pay_id: idPayments, active: true })
};

const updatePay = (idPay, bodyToUpdate) => {
    return payment
        .update(bodyToUpdate)
        .from('payments')
        .where({ pay_id: idPay, active: true })
        .returning('*')
};

const logicDeletePay = (idPay) => {
    return payment
        .update({ active: false })
        .from('payments')
        .where({ pay_id: idPay, active: true })
}

const getInfo = () => {
    return payment
    .select(
        'users.username AS user_name',
        'skills.name AS skill_name',
        'services.duration_hours',
        'services.status',
        'payments.amount',
        'payments.payment_date'
    )
    .from('services')
    .join('users', 'services.provider_id', '=', 'users.user_id')
    .join('skills', 'services.skill_id', '=', 'skills.skill_id' )
    .join('payments', 'services.id', '=', 'payments.service_id')
}



module.exports = {
    createPay,
    getAllPays,
    getOnePay,
    updatePay,
    logicDeletePay,
    getInfo


}
