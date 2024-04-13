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
};

const getAllUSerController = async (req, res) =>{
    try {
        const allUsers = await userMatch.getAllUser()
        res.status(200).json(allUsers)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getOneUSerController = async(req, res) =>{
    try {
        const idUser = req.params.id
        const user = await userMatch.getOneUSer(idUser)
        if (user.length === 0) {
            res.status(404).json({ message: 'usuario no encontrado' })
        } else {
            res.status(200).json(user[0])
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error en el servidor' })
    }
};

const getProvidersController = async(req, res)=>{
    try {
        const userProvider = await userMatch.getProviders()
        res.status(200).json(userProvider)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getEmployersController = async(req, res)=>{
    try {
        const userEmployer = await userMatch.getEmployers()
        res.status(200).json(userEmployer)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const updateuserController = async(req, res)=>{
    try {
        const idUser = req.params.id
        const bodyToUpdate = req.body
        const updateUser = await userMatch.updateUser(idUser, bodyToUpdate)
        res.status(200).json(updateUser)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const logicDeleteUserController = async (req, res) => {
    try {
        const idUser = req.params.id;
        await userMatch.logicDeleteUser(idUser); 
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error en la solicitud' });
    }
};


module.exports={
    createUserController,
    getAllUSerController,
    getOneUSerController,
    getProvidersController,
    getEmployersController,
    updateuserController,
    logicDeleteUserController,
}