const express = require('express');
const apiT = express();



apiT.use(express.urlencoded({ extended: true }));
apiT.use(express.json());

const userRoutes=require('./routes/usersRoutes');


apiT.get('/', (req, res) => {
    res.status(200).send({ response: 'un nuevo MATCH' })
});


apiT.get('/api/users', async (req, res) => {
    try {
        const allUsers = await match
            .select('*')
            .from('users')
            .where({ active: true })
        res.status(200).json(allUsers)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
});

apiT.get('/api/users/:id', async (req, res) => {
    try {
        const idUser = req.params.id
        const user = await match
            .select('*')
            .from('users')
            .where({ user_id: idUser }, { cative: true })
        if (user.length === 0) {
            res.status(404).json({ message: 'usuario no encontrado' })
        } else {
            res.status(200).json(user[0])
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error en el servidor' })
    }

});

apiT.get('/api/users/provider/true', async (req, res) => {
    try {
        const userProvider = await match
            .select('*')
            .from('users')
            .where({is_provider: true, active: true })  
        res.status(200).json(userProvider)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
});

apiT.get('/api/users/employer/true', async (req, res) => {
    try {
        const userEmployer = await match
            .select('*')
            .from('users')
            .where({is_employer: true, active: true })  
        res.status(200).json(userEmployer)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
});

apiT.put('/api/users/:id', async (req, res)=>{
    try {
        const idUser = req.params.id
        const bodyToUpdate = req.body
        const updateUser = await match
            .update(bodyToUpdate)
            .from('users')
            .where({user_id : idUser, active: true})
            .returning('*')  
        res.status(200).json(updateUser)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }

});

apiT.delete('/api/users/:id', async (req, res)=>{
    try {
        const idUser = req.params.id
        await match
            .update({active: false})
            .from('users')
            .where({user_id : idUser, active: true})  
        res.status(204).json()
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }

});


apiT.use(userRoutes)


apiT.listen(3000, () => {
    console.log('comencemos con los MATCH', 'server-ON')
})