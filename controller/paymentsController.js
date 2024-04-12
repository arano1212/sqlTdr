const matchPaymentsModels = require('../models/payments')

const createPayController =  async (req, res) =>{
    try {
        const payment = req.body;
        const newPay = await matchPaymentsModels.createPay(payment)
        res.status(201).json(newPay)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'tuvimos un error al realizar el registro' })
    }
};

const getAllPaysController = async (req, res) =>{
    try {
        const allPays = await matchPaymentsModels.getAllPays()
        res.status(200).json(allPays)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getOnePayController = async(req, res) =>{
    try {
        const idPay = req.params.id
        const pay = await matchPaymentsModels.getOnePay(idPay)
        if (pay.length === 0) {
            res.status(404).json({ message: 'pay no encontrado' })
        } else {
            res.status(200).json(pay[0])
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error en el servidor' })
    }
};

const updatePayController = async(req, res)=>{
    try {
        const idPay = req.params.id
        const bodyToUpdate = req.body
        const updatePay = await matchPaymentsModels.updatePay(idPay, bodyToUpdate)
        res.status(200).json(updatePay)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const logicDeletePayController = async (req, res) => {
    try {
        const idPay = req.params.id;
        await matchPaymentsModels.logicDeletePay(idPay); 
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error en la solicitud' });
    }
};


module.exports={
    createPayController,
    getAllPaysController,
    getOnePayController,
    updatePayController,
    logicDeletePayController

}