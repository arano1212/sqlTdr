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

const logicDeletePay =(idPay)=>{
    return payment
    .update({active: false})
    .from('payments')
    .where({pay_id: idPay, active: true})  
}



module.exports={
    createPay,
    getAllPays,
    getOnePay,
    updatePay,
    logicDeletePay

}
