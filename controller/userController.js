const userMatch = require('../models/users');

const createUserController =  async (req, res) =>{
    try {
        const user = req.body;
        const newUser = await userMatch.createUsers(user)
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'tuvimos un error al realizar el registro' })
    }
}

module.exports={
    createUserController
}