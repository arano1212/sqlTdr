const express = require('express');
const apiT = express();



apiT.use(express.urlencoded({ extended: true }));
apiT.use(express.json());

const userRoutes=require('./routes/usersRoutes');
const skillRoutes= require('./routes/skillsRoutes');


apiT.get('/', (req, res) => {
    res.status(200).send({ response: 'un nuevo MATCH' })
});

/*apiT.delete('/api/skills/:id',async (req, res)=>{
    try {
     const idSkill = req.params.id
     const bodyToUpdate = req.body
     const updateSkill = await skills 
     .update(bodyToUpdate)
     .from('skills')
     .where({skill_id: idSkill, active: true})
     .returning('*')
     res.status(200).json(updateSkill)
       
    } catch (error) {
        console.error(error)
        res.status(400).json({error: 'no se pudo realziar la solicitud'})
        
    }

})*/


apiT.use(userRoutes);
apiT.use(skillRoutes);

apiT.listen(3000, () => {
    console.log('comencemos con los MATCH', 'server-ON')
})